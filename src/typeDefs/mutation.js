const gql = require('graphql-tag');

const mutation = gql`
  type Mutation {
    signup(email: String!, password: String!, name: String!, bio: String, age: Int, gender: String): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createContact(name: String!, email: String, phoneNumber: String, jobTitle: String): Contact
    createCompany(name: String!, address: String, phoneNumber: String, website: String): Company
    addEmployee(companyId: ID!, contactId: ID!): Contact
    createJobPosting(title: String!, link: String!, companyId: ID!): JobPosting
    createApplication(jobPostingId: ID!): Application
  }
`

module.exports = {
  mutation,
}