const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contacts: [Contact!]!
    companies: [Company!]!
    employees(companyId: ID!): [Contact!]!
    jobPostings: [JobPosting!]!
    applications: [Application!]!
    notes: [Note!]!
  }
`

module.exports = {
  query,
}