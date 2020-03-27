const { getUserId } = require('../utils');

const contactResolvers = {
  Contact: {
    company: (parent, args, context, info) => {
      const company = context.prisma.contact({id: parent.id}).company()
      return company
    },
    notes: (parent, args, context, info) => {
      const userId = getUserId(context);
      const where = {
        user: {id: userId}
      }
      const notes = context.prisma.contact({id: parent.id}).notes({where})
      return notes
    }
  },
  Mutation: {
    createContact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const contact = await context.prisma.createContact({
        ...args,
        user: { connect: { id: userId }}
      })
      return contact
    }
  }
}

module.exports = {
  contactResolvers,
}