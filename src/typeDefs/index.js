const { query } = require('./query');
const { mutation } = require('./mutation');
const { userType, authPayloadType, contactType, companyType, jobPostingType, applicationType} = require('./types');

const typeDefs = [query, mutation, userType, authPayloadType, contactType, companyType, jobPostingType, applicationType];

module.exports = {
  typeDefs,
}