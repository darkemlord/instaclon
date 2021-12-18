const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    username: String
    email: String
    avatar: String
    siteWeb: String
    description: String
    password: String
    createdAt: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  type Query {
    # User
    getUser: User
  }

  type Mutation {
    register(input: UserInput): User
  }
`;

module.exports = typeDefs;
