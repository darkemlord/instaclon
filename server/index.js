const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server')
require('dotenv').config( { path: ".env" }); //calling the ENV
const typeDefs = require('./gql/schema');
const resolver = require('./gql/resolver');



const connectDataBase = async () => {
  try{
    await mongoose.connect(process.env.BBDD,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Connection success')
    server();
  } catch (error) {
    console.log(error)
    console.log('Connection error')
  }
};

connectDataBase();

const server = () => {
  const serverApollo = new ApolloServer({
    typeDefs,
    resolver,
  });
  serverApollo.listen().then(({ url }) => {
    console.log(url)
    console.log('==============================================')
    console.log(`server ready on ${url}`)
    console.log('==============================================')
  })
}
