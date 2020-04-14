const { getUserId } = require("../utils");

const applicationResolvers = {
  Application: {
    notes: (parent, args, context, info) => {
      const userId = getUserId(context);
      const where = {
        user: {id: userId}
      }
      const notes = context.prisma.application({id: parent.id}).notes({where})
      return notes
    },
    jobPosting: (parent, args, context, info) => {
      const jobPosting = context.prisma.application({id: parent.id}).jobPosting();
      return jobPosting
    }
  },
  Query: {
    applications: (parent, args, context, info) => {
      const userId = getUserId(context);
      const where = {
        user: { id: userId }
      };
      const applications = context.prisma.applications({ where });
      return applications;
    }
  },
  Mutation: {
    createApplication: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const application = await context.prisma.createApplication({
        user: { connect: { id: userId } },
        jobPosting: { connect: { id: args.jobPostingId } }
      });
      return application;
    },
    deleteApplication: async (parent, args, context, info) => {
      const userId = getUserId(context);
      const applications = await context.prisma.user({id: userId}).applications()
      const application = applications.find(application => application.id === args.id)
      return await context.prisma.deleteApplication({id: application.id})
    }
  }
};

module.exports = {
  applicationResolvers
};
