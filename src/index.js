const { GraphQLServer } = require('graphql-yoga');
const port = 4000;
const { typeDefs } = require('./typeDefs');

const resolvers = {
  Query: {
    hello: () => "Hello"
  }
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers
  //Add context
});
server.start(({port: port}) => console.log(`Server started on http://localhost:${port}`));