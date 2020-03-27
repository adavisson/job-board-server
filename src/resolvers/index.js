const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');
const { companyResolvers } = require('./companyResolvers');
const { jobPostingResolvers } = require('./jobPostingResolvers');

const resolvers = [contactResolvers, companyResolvers, userResolvers, jobPostingResolvers];

module.exports = {
  resolvers,
}