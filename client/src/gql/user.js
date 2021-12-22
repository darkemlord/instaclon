import { gql } from '@apollo/client'

export const REGISTER = gql `
  mutation Mutation($input: UserInput) {
  register(input: $input) {
    id
    name
    username
    email
    password
    createdAt
  }
}
`
export const lOGIN = gql `
  mutation Mutation($input: LoginInput) {
  login(input: $input) {
    token
  }
}
`
