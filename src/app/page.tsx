// src/app/page.tsx
"use client";
import { useEffect, useState } from "react";
import AddTodo from "@/containers/AddTodo";
import TodoList from "@/containers/TodoList";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MUT, GET_QUERY, UPDATE_MUT } from "@/query/schema";

export default function Home() {
  const [todos, setTodos] = useState<[]>([]);
  const [createTodo] = useMutation(ADD_MUT)
  const [updateTodo] = useMutation(UPDATE_MUT)
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
    const newTodoText = prompt("Enter new todo text or description:");
    if (newTodoText != null) {
      await updateTodo({
        //updating the todo
        variables: {
          id: todo.id,
          TodoText: newTodoText,
        },
      }).then(({ data }: any) => {
        const moddedTodos: any = todos.map((_todo: any) => {
          if (_todo.id === todo.id) {
            return data?.updateTodo?.data;
          } else {
            return _todo;
          }
        });
        setTodos(moddedTodos);
      });
    }
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