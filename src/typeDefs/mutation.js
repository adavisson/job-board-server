const gql = require('graphql-tag');

const mutation = gql`
  type Mutation {
    # login
    signup(email: String!, password: String!, name: String!, bio: String, age: Int, gender: String): AuthPayload
    login(email: String!, password: String!): AuthPayload

    #contact
    createContact(name: String!, email: String, phoneNumber: String, jobTitle: String, companyId: ID): Contact!
    deleteContact(id: ID!): Contact!
    updateContact(id: ID!, name: String, email: String, phoneNumber: String, jobTitle: String, companyId: ID): Contact!

    #company
    createCompany(name: String!, address: String, phoneNumber: String, website: String): Company!
    addEmployee(companyId: ID!, contactId: ID!): Contact
    updateCompany(id: ID!, name: String, address: String, phoneNumber: String, website: String): Company!

    #jobPosting
    createJobPosting(title: String!, link: String!, companyId: ID!): JobPosting

    #application
    createApplication(jobPostingId: ID!): Application!
    deleteApplication(id: ID!): Application!

    #note
    createNote(body: String!, applicationId: ID, companyId: ID contactId: ID): Note
    addNoteToCompany(noteId: ID!, companyId: ID!): Note
    addNoteToContact(noteId: ID!, contactId: ID!): Note
    addNoteToApplication(noteId: ID!, applicationId: ID!): Note
    deleteNote(id: ID!): Note!
    updateNote(id: ID!, body: String): Note!
  }
`

module.exports = {
  mutation,
}