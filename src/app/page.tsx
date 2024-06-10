// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/containers/AddTodo";
import TodoList from "@/containers/TodoList";
import { useQuery } from "@apollo/client";
import { GET_QUERY } from "@/query/schema";

export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  console.log(todos);
  const { loading, error, data } = useQuery(GET_QUERY, {
    fetchPolicy: "no-cache",
  }); //Fetching all todos
  useEffect(() => {
    setTodos(data?.todos?.data); //Storing all the todos
  }, [data]);



  const addTodo = async (todoText: string) => {};
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