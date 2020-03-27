const gql = require('graphql-tag');

const applicationType = gql`
  type Application {
    id: ID!
    applied: Boolean
    user: User!
    jobPosting: JobPosting!
    notes: [Note!]!
  }
`

module.exports = {
  applicationType,
}