"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Card, Textarea } from "flowbite-react";

export default function CreateTodo(): JSX.Element {
  const [content, setContent] = useState<string>("");

  const router = useRouter();

  const create = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8090/api/todos", {
        method: "POST",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });
      if (!response.ok) {
        console.error("POST request failed with code", response.status);
      } else {
        setContent("");
        router.refresh();
      }
    } catch (error) {
      console.error("Server error: ", error);
    }
  };
  return (
    <div>
      <Card className="mx-5 my-10">
        <form onSubmit={create}>
          <h3 className="text-nice text-xl font-bold ">Create a new Todo</h3>
          <Textarea
            className="my-5"
            placeholder="Content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          <Button type="submit">Create Todo</Button>
        </form>
      </Card>
    </div>
  );
}
