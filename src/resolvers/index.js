const { helloResolver } = require('./helloResolver');
const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');
const { companyResolvers } = require('./companyResolvers');

const resolvers = [contactResolvers, companyResolvers, helloResolver, userResolvers];

module.exports = {
  resolvers,
}