const { helloResolver } = require('./helloResolver');
const { userResolvers } = require('./userResolvers');

const resolvers = [helloResolver, userResolvers];

module.exports = {
  resolvers,
}