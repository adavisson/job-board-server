const { getUserId } = require('../utils');

const noteResolvers = {
  Mutation: {
    createNote: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const note = await context.prisma.createNote({
        user: { connect: { id: userId }},
        body: args.body
      })
      return note
    },
    addNoteToCompany: (parent, args, context, info) => {
      const userId = getUserId
      const note = context.prisma.updateNote({
        data: {
          company: {
            connect: {id: args.companyId}
          }
        },
        where: {
          id: args.noteId
        }
      })
      return note
    }
  }
}

module.exports = {
  noteResolvers,
}