const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolvers');
require('dotenv').config( { path: ".env" }); //calling the ENV

mongoose.connect(process.env.BBDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err, _) => {
  if(err){
    console.log('connection error')
    console.log(err)
  } else {
    console.log('connection succes!')
    server();
  }
})

const server = async () => {
  const app = express();
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers
  });
  await serverApollo.start();
  serverApollo.applyMiddleware({app});
  app.use((_,res) => {
    res.send("server started succesfully")
  })
  app.listen({ port: 4000 }, () => {
    console.log(`server running at http://localhost:4000/graphql`)
  })
}
