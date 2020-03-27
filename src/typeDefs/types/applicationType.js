const gql = require('graphql-tag');

const applicationType = gql`
  type Application {
    id: ID!
    applied: Boolean
    user: User!
    jobPosting: JobPosting!
  }
`

module.exports = {
  applicationType,
}