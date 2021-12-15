const User = require('../models/user')
const resolver = {
  Query: {
    // User
    getUser: () => {
      console.log('hello')
      return null
    },
  },
  Mutation: {
    //User
    register: (_, { input }) => {
      console.log('corriendo')
      return null
    }
  }
}

module.exports = resolver
