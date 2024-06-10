import { gql } from "@apollo/client";
export const GET_QUERY = gql`
query todoQuery {
  todos {
    data {
      id
      attributes {
        TodoText
         createdAt
      }
    }
  }
}
`;