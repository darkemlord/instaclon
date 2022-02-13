const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const express = require('express');
const { graphqlUploadExpress } = require('graphql-upload')
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
  const serverApollo = new ApolloServer({
    typeDefs,
    resolvers
  });
  await serverApollo.start();
  const app = express();
  app.use(graphqlUploadExpress());
  serverApollo.applyMiddleware({app});
  await new Promise((r) => app.listen({ port: process.env.PORT || 4000 }, r));
  console.log('======================================================');
  console.log(`server running at http://localhost:4000${serverApollo.graphqlPath}`);
  console.log('======================================================');
}
