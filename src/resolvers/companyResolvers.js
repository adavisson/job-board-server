const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    companyContacts: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = { companyId: args.companyId }
      const contacts = context.prisma.user({ id: userId }).contacts(where)
      return contacts
    }
  },
  Mutation: {

  }
}

module.exports = {
  companyResolvers,
}