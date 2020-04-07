const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contacts: [Contact!]!
    company(id: ID!): Company
    companies: [Company!]!
    jobPostings: [JobPosting!]!
    applications: [Application!]!
    notes: [Note!]!
    currentUser: User!
  }
`

module.exports = {
  query,
}