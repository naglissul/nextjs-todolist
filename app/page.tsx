"use client";

import { useEffect } from "react";

export default function Home(): JSX.Element {
  
  return (
    <main>
      <h1 className="text-center text-nice font-bold text-5xl my-16">
        Welcome to the Todo app
      </h1>
      <p className="text-buttonHover text-center text-cm mx-16">
        Navigate to your todo list on the side bar
      </p>
    </main>
  );
}
