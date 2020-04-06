const { getUserId } = require('../utils');

const noteResolvers = {
  Note: {
    company: (parent, args, context, info) => {
      const company = context.prisma.note({id: parent.id}).company()
      return company
    },
    contact: (parent, args, context, info) => {
      const contact = context.prisma.note({id: parent.id}).contact()
      return contact
    },
    application: (parent, args, context, info) => {
      const application = context.prisma.note({id: parent.id}).application()
      return application
    }
  },
  Query: {
    notes: (parent, args, context, info) => {
      const userId = getUserId(context);
      const notes = context.prisma.notes();
      return notes;
    }
  },
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
      const userId = getUserId(context);
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
    },
    addNoteToContact: (parent, args, context, info) => {
      const userId = getUserId(context);
      const note = context.prisma.updateNote({
        data: {
          contact: {
            connect: {id: args.contactId}
          }
        },
        where: {
          id: args.noteId
        }
      })
      return note
    },
    addNoteToApplication: (parent, args, context, info) => {
      const userId = getUserId(context);
      const note = context.prisma.updateNote({
        data: {
          application: {
            connect: {id: args.applicationId}
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