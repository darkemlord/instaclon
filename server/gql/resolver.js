const User = require('../models/user')
const resolver = {
  Query: {
    getUser: () => {
      console.log('hello')
      return null
    },
  },
  Mutation: {
    register: (_, { input }) => {
      console.log('corriendo')
      return null
    }
  }
}

module.exports = resolver
