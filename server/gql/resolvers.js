const userController = require('../controllers/User');
const { GraphQLUpload} = require('graphql-upload')

const resolvers = {

  Upload: GraphQLUpload,

  Query: {
    getUser: (_, { id, username }) => userController.getUser(id, username),
  },

  Mutation: {
    register: (_, { input }) => userController.register(input),
    login:(_, { input } ) => userController.login(input),
    updateAvatar:(_, { file }, ctx) => userController.updateAvatar(file, ctx)
  },
}

module.exports = resolvers
