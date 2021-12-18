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

  type Token {
    token: String
  }

  input UserInput {
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input LoginInput{
    email: String!
    password: String!
  }
  type Query {
    # User
    getUser: User
  }

  type Mutation {
    register(input: UserInput): User
    login(input: LoginInput): Token
  }
`;

module.exports = typeDefs;
