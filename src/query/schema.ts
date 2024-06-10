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

export const ADD_MUT = gql`
mutation createTodo($TodoText: String) {
  createTodo(data: { TodoText: $TodoText}) {
    data {
      id
      attributes {
        TodoText
        createdAt
      }
    }
  }
}
`