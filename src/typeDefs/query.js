const gql = require('graphql-tag');

const query = gql`
  type Query {
    hello: String!
    name: String!
  }
`

module.exports = {
  query,
}