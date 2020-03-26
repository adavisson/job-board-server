const { helloResolver } = require('./helloResolver');

const resolvers = [helloResolver];

module.exports = {
  resolvers,
}