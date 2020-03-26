const { query } = require('./query');
const { mutation } = require('./mutation');
const { userType, authPayloadType } = require('./types');

const typeDefs = [query, mutation, userType, authPayloadType];

module.exports = {
  typeDefs,
}