const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');
const { companyResolvers } = require('./companyResolvers');
const { jobPostingResolvers } = require('./jobPostingResolvers');
const { applicationResolvers } = require('./applicationResolvers');

const resolvers = [contactResolvers, companyResolvers, userResolvers, jobPostingResolvers, applicationResolvers];

module.exports = {
  resolvers,
}