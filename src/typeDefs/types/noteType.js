const gql = require('graphql-tag');

const noteType = gql`
  type Note {
    id: ID!
    body: String!
    user: User!
    company: Company
    application: Application
    contact: Contact
    updatedAt: String
  }
`

module.exports = {
  noteType,
}