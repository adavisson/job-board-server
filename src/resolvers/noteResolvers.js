const { getUserId } = require('../utils');

const noteResolvers = {
  Query: {

  },
  Mutation: {
    createNote: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const note = await context.prisma.createNote({
        user: { connect: { id: userId }},
        body: args.body
      })
      return note
    }
  }
}

module.exports = {
  noteResolvers,
}