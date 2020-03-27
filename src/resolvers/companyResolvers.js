const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    // Still needs work
    employees: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = {
        AND: [
          { company: { id: args.companyId }},
          { user: { id: userId }}
        ]
      }
      const contacts = await context.prisma.contacts({ 
        where
      });
      return contacts
    }
  },
  Mutation: {
    createCompany: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const company = await context.prisma.createCompany(args)
      return company
    },
    addEmployee: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const contact = await context.prisma.updateContact({
        data: {
          company: {
            connect: {id: args.companyId}
          }
        },
        where: {
          id: args.contactId
        }
      })
      return contact
    }
  }
}

module.exports = {
  companyResolvers,
}