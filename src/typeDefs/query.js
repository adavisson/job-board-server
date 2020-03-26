const gql = require('graphql-tag');

const query = gql`
  type Query {
    hello: String!
    name: String!
    contacts: [Contact!]!
    companyContacts(companyId: ID): [Contacts!]!
  }
`

module.exports = {
  query,
}