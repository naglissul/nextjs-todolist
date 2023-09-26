"use client";
import { useState } from "react";
import { Button, Card, Textarea } from "flowbite-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

interface IEditTodo {
  todoId: string;
  oldContent: string;
}

export default function EditTodo({
  todoId,
  oldContent,
}: IEditTodo): JSX.Element {
  const [content, setContent] = useState<string>(oldContent);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const editTodo = async () => {
    event?.preventDefault();
    const response = await fetch(`http://127.0.0.1:8090/api/todos/${todoId}`, {
      method: "PATCH",
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    });
    if (response.ok) {
      setIsSaved(true);
    } else {
      console.error("PATCH failed. Code: ", response.status);
    }
  };
  return (
    <Card className="mx-5 my-10">
      <form onSubmit={editTodo}>
        <h3 className="text-nice text-xl font-bold ">Edit content here</h3>
        <Textarea
          className="my-5"
          placeholder="Enter new content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Submit Edit</Button>
      </form>
      {isSaved && (
        <Link href="/todos">
          <Button color="green">Saved! Go back</Button>
        </Link>
      )}
    </Card>
  );
}
