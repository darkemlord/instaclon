const User = require('../models/user')
const resolver = {
  Query: {
    // User
    getUser: () => {
      console.log('obteniendo usuario')
      return null;
    }
  },
  Mutation: {
    //User
    register: (_, { input }) => {
      console.log('corriendo')
      return input
    }
  }
}

module.exports = resolver
