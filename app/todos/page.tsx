"use client";
import CreateTodo from "@/components/CreateTodo";

import Todo from "./Todo";
import { useEffect, useState } from "react";

interface ITodo {
  id: string;
  isDone: boolean;
  content: string;
  created: string;
}

async function login() {
  try {
    const req = await fetch("http://127.0.0.1:8090/api/users/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "admin@example.com",
        password: "admin",
      }),
    });
    const resp = await req?.json();
    console.log(resp.token);
    return resp.token;
  } catch (err) {
    console.log(err);
  }
}

async function getTodos(token: string): Promise<ITodo[]> {
  const res = await fetch("http://127.0.0.1:8090/api/todos", {
    method: "GET",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data?.docs;
}

export default async function TodosPage() {
  const [todos, setTodos] = useState<ITodo[]>();
  const [token, setToken] = useState<string>("");

  const fetchData = async () => {
    const token = await login();
    setToken(token);
    const todos = await getTodos(token);
    setTodos(todos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center text-nice font-bold text-5xl my-16">
        Your todos
      </h1>
      <p className="text-buttonHover text-center text-cm mx-16">
        Create, mark as done, view, edit and delete your todos
      </p>
      <div>
        {todos?.map((todo) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              isDone={todo.isDone}
              content={todo.content}
              created={todo.created}
            />
          );
        })}
      </div>
      <CreateTodo />
    </div>
  );
}
