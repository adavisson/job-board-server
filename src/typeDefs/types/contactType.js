const gql = require('graphql-tag');

const contactType = gql`
  type Contact {
    id: ID!
    name: String!
    email: String
    phoneNumber: String
    jobTitle: String
    user: User!
    company: Company
    notes: [Note!]!
  }
`

module.exports = {
  contactType,
}