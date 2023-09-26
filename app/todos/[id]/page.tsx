"use client";

import EditTodo from "./EditTodo";

interface ITodo {
  id: string;
  isDone: boolean;
  content: string;
  created: string;
}

async function getTodo(todoId: string): Promise<ITodo> {
  const res = await fetch(`http://127.0.0.1:8090/api/todos/${todoId}`, {
    method: "GET",
    credentials: "include",

    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export default async function TodoEditPage({ params }: any) {
  const todo = await getTodo(params.id);

  return (
    <div>
      <h1 className="text-center text-nice font-bold text-5xl my-16">
        Edit your todo
      </h1>

      <EditTodo todoId={todo.id} oldContent={todo.content} />
    </div>
  );
}
