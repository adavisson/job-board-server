const { query } = require('./query');
const { mutation } = require('./mutation');
const { userType, authPayloadType, contactType } = require('./types');

const typeDefs = [query, mutation, userType, authPayloadType, contactType];

module.exports = {
  typeDefs,
}