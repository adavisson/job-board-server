const { query } = require('./query');
const { mutation } = require('./mutation');
const { userType, authPayloadType, contactType, companyType } = require('./types');

const typeDefs = [query, mutation, userType, authPayloadType, contactType, companyType];

module.exports = {
  typeDefs,
}