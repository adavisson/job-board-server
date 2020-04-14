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
    },
    user: (parent, args, context, info) => {
      const user = context.prisma.note({id: parent.id}).user()
      return user
    }
  },
  Query: {
    note: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const notes = await context.prisma.user({id: userId}).notes()
      const note = notes.find(note => note.id === args.id)
      return note
    }
  },
  Mutation: {
    createNote: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const noteObject = {
        body: args.body
      }

      if (args.companyId) {
        noteObject.company = { connect: { id: args.companyId }}
      }

      if (args.contactId) {
        noteObject.contact = { connect: { id: args.contactId }}
      }
      
      if (args.applicationId) {
        noteObject.application = { connect: { id: args.applicationId }}
      }

      const note = await context.prisma.createNote({
        ...noteObject,
        user: { connect: { id: userId }}
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
    },
    deleteNote: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const notes = await context.prisma.user({id: userId}).notes()
      const note = notes.find(note => note.id === args.id)
      return await context.prisma.deleteNote({id: note.id});
    }
  }
}

module.exports = {
  noteResolvers,
}