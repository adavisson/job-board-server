const { getUserId } = require('../utils')

const jobPostingResolvers = {
  Query: {
    jobPostings: (parent, args, context, info) => {
      return context.prisma.jobPostings()
    }
  },
  Mutation: {
    createJobPosting: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const jobPosting = await context.prisma.createJobPosting({
        title: args.title,
        link: args.link,
        company: { connect: { id: args.companyId }}
      })
      return jobPosting
    }
  }
}

module.exports = {
  jobPostingResolvers,
}