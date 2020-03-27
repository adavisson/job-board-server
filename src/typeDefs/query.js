const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contacts: [Contact!]!
    companies: [Company!]!
    employees(companyId: ID!): [Contact!]!
    jobPostings: [jobPostings!]!
  }
`

module.exports = {
  query,
}