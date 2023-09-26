import { CollectionConfig } from "payload/types";

const Todos: CollectionConfig = {
  slug: "todos",
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    { name: "content", type: "text", required: true },
    { name: "isDone", type: "checkbox", required: true },
  ],
};

export default Todos;
