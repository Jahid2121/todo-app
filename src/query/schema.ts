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

export const UPDATE_MUT = gql`
  mutation updateTodo($id: ID!, $TodoText: String!) {
    updateTodo(id: $id, data: { TodoText: $TodoText }) {
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