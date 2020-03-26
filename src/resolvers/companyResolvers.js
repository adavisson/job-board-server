const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    employees: (parent, args, context, info) => {
      const userId = getUserId(context)
      const company = context.prisma.company({ id: args.companyId });
      const where = { company: company }
      const contacts = context.prisma.user({ id: userId }).contacts(where)
      return contacts
    }
  },
  Mutation: {
    createCompany: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const company = await context.prisma.createCompany(args)
      return company
    }
  }
}

module.exports = {
  companyResolvers,
}