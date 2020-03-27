const { getUserId } = require('../utils');

const companyResolvers = {
  Query: {
    companies: (parent, args, context, info) => {
      return context.prisma.companies()
    },
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
    },
    companyNotes: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = {
        user: {id: userId}
      }
      const notes = context.prisma.company({id: args.companyId}).notes({where})
      return notes
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