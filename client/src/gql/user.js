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
