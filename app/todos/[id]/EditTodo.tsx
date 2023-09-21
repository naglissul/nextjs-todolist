import { useState } from "react";
import { Button, Card, Textarea } from "flowbite-react";
import { redirect } from "next/navigation";

interface IEditTodo {
  todoId: string;
  oldContent: string;
}

export default function EditTodo({
  todoId,
  oldContent,
}: IEditTodo): JSX.Element {
  const [content, setContent] = useState<string>(oldContent);

  const editTodo = async () => {
    await fetch(
      `http://127.0.0.1:8090/api/collections/Todos/records/${todoId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: content }),
      }
    );
    redirect("/todos");
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
        <Button type="submit">Sumbit Edit</Button>
      </form>
    </Card>
  );
}
