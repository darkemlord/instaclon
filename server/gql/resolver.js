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
      console.log('User registering');
      console.log(input);
    }
  }
}

module.exports = resolver
