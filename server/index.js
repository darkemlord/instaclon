const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server')
require('dotenv').config( { path: ".env" }); //calling the ENV
const typeDefs = require('./gql/schema');
const resolver = require('./gql/resolver');

mongoose.connect(process.env.BBDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, res) => {
  if(err){
    console.log('connection error')
    console.log(err)
  } else {
    console.log('connection succes!')
    server();
  }
})

const server = () => {
  const serverApollo = new ApolloServer({
    cors: {
        "origin": "https://studio.apollographql.com",
        "credentials": true
    },
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
