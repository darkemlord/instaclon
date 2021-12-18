const User = require('../models/user')
const resolvers = {
  Query: {
    getUser: () => {
      console.log('hello')
      return null
    },
  },
  Mutation: {
    register: async (_, { input }) => {
      const newUser = input;
      newUser.email = newUser.email.toLowerCase();
      newUser.username = newUser.username.toLowerCase();
      const {email, username, password } = newUser;

      const foundEmail = await User.findOne({ email });
      if(foundEmail) throw new Error('Email already in use');

      const foundUsername = await User.findOne({username });
      if(foundUsername) throw Error('Username already in use');
      //encrypt password
      try{
        const user = new User(newUser);
        user.save();
        return user;
      }catch(err){
        console.log(err)
      }
    }
  }
}

module.exports = resolvers
