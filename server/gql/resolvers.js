const userController = require('../controllers/User');
console.log(userController)

const resolvers = {
  Query: {
    getUser: () => {
      console.log('hello')
      return null
    },
  },
  Mutation: {
    register: async (_, { input }) => userController.register(input)
  },
}

module.exports = resolvers
