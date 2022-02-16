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
export const LOGIN = gql `
  mutation Mutation($input: LoginInput) {
  login(input: $input) {
    token
  }
}
`
export const GET_USER = gql `
  query GetUser($id: ID, $username: String) {
  getUser(id: $id, username: $username) {
    id
    username
    email
    name
    avatar
    siteWeb
    description
  }
}
`
export const UPDATE_AVATAR = gql `
  mutation Mutation($file: Upload) {
  updateAvatar(file: $file) {
    status
    urlAvatar
  }
}
`

export const DELETE_AVATAR = gql `
  mutation Mutation {
  deleteAvatar
}
`
