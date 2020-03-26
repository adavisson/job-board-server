const gql = require('graphql-tag');

const contactType = gql`
  type Contact {
    id: ID!
    name: String!
    email: String
    phoneNumber: String
    jobTitle: String
    user: User!
  }
`

module.exports = {
  contactType,
}