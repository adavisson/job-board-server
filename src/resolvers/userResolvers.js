const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

const userResolvers = {
  User: {
    notes: (parent, args, context, info) => {
      const notes = context.prisma.user({id: parent.id}).notes()
      return notes
    },
    contacts: (parent, args, context, info) => {
      const contacts = context.prisma.user({id: parent.id}).contacts()
      return contacts
    },
    applications: (parent, args, context, info) => {
      const applications = context.prisma.user({id: parent.id}).applications()
      return applications
    }
  },
  Query: {
    name: (parent, args, context, info) => {
      const userId = getUserId(context);
      return context.prisma.user({ id: userId }).name()
    },
    contacts: (parent, args, context, info) => {
      const userId = getUserId(context);
      return context.prisma.user({ id: userId }).contacts()
    },
    currentUser: (parent, args, context, info) => {
      const userId = getUserId(context)
      const user = context.prisma.user({id: userId})
      return user
    },
    notes: (parent, args, context, info) => {
      const userId = getUserId(context)
      const notes = context.prisma.user({id: userId}).notes()
      return notes
    }
  },
  Mutation: {
    signup: async (parent, args, context, info) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.createUser({...args, password});
      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      return {
        token,
        user,
      }
    },
    login: async (parent, args, context, info) => {
      const user = await context.prisma.user({ email: args.email })
      if (!user) {
        throw new Error("No such user found")
      }

      const valid = await bcrypt.compare(args.password, user.password)
      if (!valid) {
        throw new Error("Invalid password");
      }

      const token = jwt.sign({ userId: user.id }, APP_SECRET)

      return {
        token,
        user,
      }
    }
  }
}

module.exports = {
  userResolvers
}