"use client";
import { Button, Checkbox } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Todo({ todo }: any) {
  const { id, content, created } = todo || {};
  const [isDone, setIsDone] = useState<boolean>(false);

  const markDone = async () => {
    await fetch(`http://127.0.0.1:8090/api/collections/Todos/records/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isDone: !isDone }),
    });
    setIsDone(!isDone);
  };

  return (
    <div className="flex space-x-5 my-5 mx-5 px-5 py-5 align-center border">
      <div>
        <Checkbox
          checked={isDone}
          onChange={() => {
            markDone();
          }}
        />
      </div>

      <p
        className={`mb-3 text-lg ${
          isDone ? "text-gray-500 line-through" : "text-buttonHover"
        } md:text-xl dark:text-gray-400`}
      >
        {content}
      </p>
      <p>{created?.slice(10, 16)}</p>
      <Link href={`/todos/${id}`}>
        <Button color="purple">Edit</Button>
      </Link>
      <Button
        color="failure"
        onClick={() => {
          deleteTodo(id);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

const deleteTodo = async (id: string) => {
  await fetch(`http://127.0.0.1:8090/api/collections/Todos/records/${id}`, {
    method: "DELETE",
  });
};
