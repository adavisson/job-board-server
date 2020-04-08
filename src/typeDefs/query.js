const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contact(id: ID!): Contact
    contacts: [Contact!]!
    company(id: ID!): Company
    companies: [Company!]!
    jobPosting(id: ID!): JobPosting
    jobPostings: [JobPosting!]!
    applications: [Application!]!
    notes: [Note!]!
    currentUser: User!
  }
`

module.exports = {
  query,
}