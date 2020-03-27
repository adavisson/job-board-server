const { getUserId } = require('../utils');

const noteResolvers = {
  Query: {

  },
  Mutation: {
    createNote: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const note = context.prisma.createNote({
        user: {id: userId},
        body: args.body
      })
      return note
    }
  }
}

module.exports = {
  noteResolvers,
}