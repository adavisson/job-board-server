const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    employees: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = { companyId: args.companyId }
      const contacts = context.prisma.user({ id: userId }).contacts(where)
      return contacts
    }
  },
  Mutation: {
    createCompany: (parent, args, context, info) => {

    }
  }
}

module.exports = {
  companyResolvers,
}