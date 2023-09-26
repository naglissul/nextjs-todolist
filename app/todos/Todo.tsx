"use client";
import { Button, Checkbox } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ITodo {
  id: string;
  isDone: boolean;
  content: string;
  created: string;
}

export default function Todo({ id, isDone, content, created }: ITodo) {
  const router = useRouter();

  const deleteTodo = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8090/api/todos/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) {
        console.error("DELETE request failed with code", response.status);
      } else {
        router.refresh();
        alert("Please, refresh...");
      }
    } catch (error) {
      console.error("Server error: ", error);
    }
  };

  const markDone = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8090/api/todos/${id}`, {
        method: "PATCH",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: !isDone }),
      });
      if (!response.ok) {
        console.error("PATCH request failed with code", response.status);
      } else {
        router.refresh();
        alert("Please, refresh...");
      }
    } catch (error) {
      console.error("Server error: ", error);
    }
  };

  return (
    <div className="flex space-x-5 my-5 mx-5 px-5 py-5 align-center border">
      <div>
        <Checkbox checked={isDone} onChange={() => markDone()} />
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
      <Button color="failure" onClick={() => deleteTodo()}>
        Delete
      </Button>
    </div>
  );
}
