const { GraphQLServer } = require('graphql-yoga');
const port = 4000;

const resolvers = {
  Query: {
    hello: () => "Hello"
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
  //Add context
});
server.start(({port: port}) => console.log(`Server started on http://localhost:${port}`));