const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    employees: (parent, args, context, info) => {
      const userId = getUserId(context)
      const user = context.prisma.user({ id: userId });
      const where = { user: user }
      const contacts = context.prisma.company({ id: args.companyId }).employees(where)
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