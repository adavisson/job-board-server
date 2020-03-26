const { GraphQLServer } = require('graphql-yoga');
const port = 4000;
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { dotenv } = require('dotenv');

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  //Add context
});
server.start(({port: port}) => console.log(`Server started on http://localhost:${port}`));