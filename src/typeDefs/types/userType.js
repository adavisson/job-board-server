const gql = require('graphql-tag');

const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    Bio: String
    Age: Int
    Gender: GenderOptions
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