"use client";
import Link from "next/link";
import HomeButton from "./HomeButon";
import BookButton from "./BookButton";

export default function SideBar(): JSX.Element {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                    flex flex-col
                    bg-milkshake text-nice shadow-lg"
    >
      <Link href="/">
        <HomeButton />
      </Link>
      <Link href="/todos">
        <BookButton />
      </Link>
    </div>
  );
}
