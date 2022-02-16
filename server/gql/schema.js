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

  scalar Upload

  type Token {
    token: String
  }

  type updateAvatar {
    status: Boolean
    urlAvatar: String
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
    getUser(id: ID, username: String): User
  }

  type Mutation {
    register(input: UserInput): User
    login(input: LoginInput): Token
    updateAvatar(file: Upload): updateAvatar
    deleteAvatar: Boolean
  }
`;

module.exports = typeDefs;
