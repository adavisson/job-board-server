const { getUserId } = require('../utils');

const contactResolvers = {
  Mutation: {
    createContact: async (parent, args, context, info) => {
      const userId = getUserId(context)
      const contact = await context.prisma.createContact({
        ...args,
        user: { connect: { id: userId }}
      })
      return contact
    }
  }
}

module.exports = {
  contactResolvers,
}