const { helloResolver } = require('./helloResolver');
const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');
const { companyResolvers } = require('./companyResolvers');
const { jobPostingResolvers } = require('./jobPostingResolvers');

const resolvers = [contactResolvers, companyResolvers, helloResolver, userResolvers, jobPostingResolvers];

module.exports = {
  resolvers,
}