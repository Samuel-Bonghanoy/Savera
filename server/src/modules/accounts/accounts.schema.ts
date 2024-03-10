import gql from "graphql-tag";

export const typeDefs = gql`
  "The user schema."
  type User {
    "The user's ID in the database."
    id: ID!
    "The user's username."
    userName: String!
    "The user's email."
    email: String!
    "The user's password."
    password: String!
    createdAt: DateTime!
    "The date the user was updated."
  }

  "The account schema."
  type Account {
    "The account's ID in the database."
    id: ID!
    "The name of the account."
    name: String!
    "The creator of the account."
    owner: User!
  }

  type Mutation {
    "Register an account to the system."
    registerAccount(userDetails: RegisterInput!): UserResponse!
    "Login a registered account."
    loginAccount(
      "The username (or email) of the user."
      username: String!
      "The password of the user."
      password: String!
    ): UserResponse!
    "Logs out the currently logged in account."
    logoutAccount: UserResponse!
    "Deletes an account from the system. This can still be recovered if the user wishes to do so."
    deleteAccount: UserResponse!
  }

  type Query {
    "Get the currently logged in account."
    me: User!
    "Get all the users in the database."
    users: [User!]!
  }
`;
