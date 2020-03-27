const gql = require('graphql-tag');

const companyType = gql`
  type Company {
    id: ID!
    name: String!
    address: String
    phone: String
    website: String
    employees: [Contact!]!
    jobPostings: [JobPosting!]!
    notes: [Note!]!
  }
`

module.exports = {
  companyType,
}