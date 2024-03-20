import gql from "graphql-tag";

export const typeDefs = gql`
  "The account schema."
  type IncomeType {
    "The income's ID in the database."
    id: ID!
    "The name of the income type."
    name: String!
    "The creator of this income type."
    owner: User!
  }

  "The user schema."
  type Income {
    "The income's ID in the database."
    id: ID!
    "The amount of the income"
    amount: Float!
    "The expense's description."
    description: String!
    "The income type."
    incomeTypeId: IncomeType!
  }
`;
