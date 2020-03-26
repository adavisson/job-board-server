const helloResolver = {
  Query: {
    hello: (parent, args, context) => {
      return "Hello World"
    }
  }
}

module.exports = {
  helloResolver,
}