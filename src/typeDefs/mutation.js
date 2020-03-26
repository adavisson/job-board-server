const gql = require('graphql-tag');

const mutation = gql`
  type Mutation {
    signup(email: String!, password: String!, name: String!, bio: String, age: Int, gender: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createContact(name: String!, email: String, phoneNumber: String, jobTitle: String): Contact
  }
`

module.exports = {
  mutation,
}