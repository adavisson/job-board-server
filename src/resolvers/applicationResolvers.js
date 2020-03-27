const { getUserId } = require('../utils');

const applicationResolvers = {
  Query: {
    applications: (parent, args, context, info) => {
      const userId = getUserId(context);
      const applications = context.prisma.applications({ user: { id: userId } })
      return applications
    }
  },
  Mutation: {
    createApplication: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const application = await context.prisma.createApplication({
        user: { connect: { id: userId } },
        jobPosting: { connect: { id: args.jobPostingId } }
      })
      return application
    }
  }
}

module.exports = {
  applicationResolvers,
}