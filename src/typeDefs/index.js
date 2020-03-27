const { query } = require('./query');
const { mutation } = require('./mutation');
const { userType, authPayloadType, contactType, companyType, jobPostingType, applicationType, noteType} = require('./types');

const typeDefs = [query, mutation, userType, authPayloadType, contactType, companyType, jobPostingType, applicationType, noteType];

module.exports = {
  typeDefs,
}