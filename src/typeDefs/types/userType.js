const gql = require('graphql-tag');

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    bio: String
    age: Int
    gender: GenderOptions
  }

  enum GenderOptions {
    MALE
    FEMALE
    OTHER
  }
`

module.exports = {
  userType,
}