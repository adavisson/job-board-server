const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');
const { companyResolvers } = require('./companyResolvers');
const { jobPostingResolvers } = require('./jobPostingResolvers');
const { applicationResolvers } = require('./applicationResolvers');
const { noteResolvers } = require('./noteResolvers');

const resolvers = [contactResolvers, companyResolvers, userResolvers, jobPostingResolvers, applicationResolvers, noteResolvers];

module.exports = {
  resolvers,
}