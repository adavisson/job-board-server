const gql = require('graphql-tag');

const query = gql`
  type Query {
    name: String!
    contacts: [Contact!]!
    companies: [Company!]!
    employees(companyId: ID!): [Contact!]!
    jobPostings: [JobPosting!]!
    applications: [Application!]!
    userNotes: [Note!]!
    companyNotes(companyId: ID!): [Note!]!
    contactNotes: [Note!]!
    applicationNotes: [Note!]!
  }
`

module.exports = {
  query,
}