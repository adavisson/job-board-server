const { helloResolver } = require('./helloResolver');
const { userResolvers } = require('./userResolvers');
const { contactResolvers } = require('./contactResolvers');

const resolvers = [contactResolvers, helloResolver, userResolvers];

module.exports = {
  resolvers,
}