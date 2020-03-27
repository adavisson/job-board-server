const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contacts: [Contact!]!
    employees(companyId: ID!): [Contact!]!
  }
`

module.exports = {
  query,
}