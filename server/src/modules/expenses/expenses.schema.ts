import gql from "graphql-tag";

export const typeDefs = gql`
  "The account schema."
  type ExpenseType {
    "The income type's ID in the database."
    id: ID!
    "The name of the expense type."
    name: String!
    "The creator of the expense type."
    owner: User!
  }

  "The user schema."
  type Expense {
    "The expense's ID in the database."
    id: ID!
    "The amount of the expense"
    amount: Float!
    "The expense's description."
    description: String!
    "The expense type."
    incomeTypeId: ExpenseType!
  }
`;
