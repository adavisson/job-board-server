const gql = require('graphql-tag');

const authPayloadType = gql`
  type AuthPayload {
    token: String
    user: User
  }
`

module.exports = {
  authPayloadType,
}