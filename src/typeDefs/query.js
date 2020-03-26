const gql = require('graphql-tag');

const query = gql`
  type Query {
    hello: String!
  }
`

module.exports = {
  query,
}