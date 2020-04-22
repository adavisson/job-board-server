const { getUserId } = require('../utils')

const contactResolvers = {
  Contact: {
    company: (parent, args, context, info) => {
      const company = context.prisma.contact({ id: parent.id }).company()
      return company
    },
    notes: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = {
        user: { id: userId },
      }
      const notes = context.prisma.contact({ id: parent.id }).notes({ where })
      return notes
    },
    user: (parent, args, context, info) => {
      const userId = getUserId(context)
      return context.prisma.contact({ id: parent.id }).user()
    },
  },
  Query: {
    contact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const contacts = await context.prisma.user({ id: userId }).contacts()
      const contact = contacts.find((contact) => contact.id === args.id)
      return contact
    },
    contacts: (parent, args, context, info) => {
      const userId = getUserId(context)
      return context.prisma.user({ id: userId }).contacts()
    },
  },
  Mutation: {
    createContact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const contactObject = {
        name: args.name,
        email: args.email,
        phoneNumber: args.phoneNumber,
        jobTitle: args.jobTitle,
      }
      if (args.companyId) {
        contactObject.company = { connect: { id: args.companyId } }
      }
      const contact = await context.prisma.createContact({
        ...contactObject,
        user: { connect: { id: userId } },
      })
      return contact
    },
    deleteContact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const contacts = await context.prisma.user({ id: userId }).contacts()
      const contact = contacts.find((contact) => contact.id === args.id)
      return await context.prisma.deleteContact({ id: contact.id })
    },
    updateContact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const { id, companyId, ...data } = args
      return await context.prisma.updateContact({
        data: {
          company: { connect: { id: companyId } },
          ...data,
        },
        where: { id: id },
      })
    },
  },
}

module.exports = {
  contactResolvers,
}
