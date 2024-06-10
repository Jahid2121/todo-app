// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/containers/AddTodo";
import TodoList from "@/containers/TodoList";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MUT, GET_QUERY } from "@/query/schema";

export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  const [createTodo] = useMutation(ADD_MUT)
  const { loading, error, data } = useQuery(GET_QUERY, {
    fetchPolicy: "no-cache",
  }); //Fetching all todos
  useEffect(() => {
    setTodos(data?.todos?.data); //Storing all the todos
  }, [data]);





  const addTodo = async (TodoText: string) => {
    await createTodo({
      // creating a new todo 
      variables: {
        TodoText: TodoText
      },
    }).then(({data}: any) => {
      setTodos([...todos, data?.createTodo?.data] as any)  //Adding the new todo to the list
    })
  };


  const editTodoItem = async (todo: any) => {
    console.log("Edited");
  };
  const deleteTodoItem = async (todo: any) => {
    console.log("Deleted");
  };
  return (
    <div>
      <main className="main">
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodoItem={deleteTodoItem}
          editTodoItem={editTodoItem}
        />
      </main>
    </div>
  );
}