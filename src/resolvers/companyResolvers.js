const { getUserId } = require('../utils');

const companyResolvers = {
  Company: {
    notes: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = {
        user: {id: userId}
      }
      const notes = context.prisma.company({id: parent.id}).notes({where})
      return notes
    },
    employees: (parent, args, context, info) => {
      const userId = getUserId(context)
      const where = {
        user: {id: userId}
      }
      const employees = context.prisma.company({id: parent.id}).employees({where})
      return employees
    },
    jobPostings: (parent, args, context, info) => {
      const jobPostings = context.prisma.company({id: parent.id}).jobPostings()
      return jobPostings
    }
  }, 
  Query: {
    companies: (parent, args, context, info) => {
      return context.prisma.companies()
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