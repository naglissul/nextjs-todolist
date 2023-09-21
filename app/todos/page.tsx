"use client";
import CreateTodo from "@/components/CreateTodo";

import Todo from "./Todo";

async function getTodos() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/Todos/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function TodosPage() {
  const todos = await getTodos();
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
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
      <CreateTodo />
    </div>
  );
}
