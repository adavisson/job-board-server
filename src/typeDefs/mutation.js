const gql = require('graphql-tag');

const mutation = gql`
  type Mutation {
    signup(email: String!, password: String!, name: String!, bio: String, age: Int, gender: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`

module.exports = {
  mutation,
}