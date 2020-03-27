const gql = require("graphql-tag");

const jobPostingType = gql`
  type JobPosting {
    id: ID!
    title: String!
    link: String!
    company: Company!
  }
`

module.exports = {
  jobPostingType,
}