import SideBar from "@/components/SideBar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "To do list",
  description: "Basic app for learning nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav className="flex">
            <SideBar />
          </nav>
          <div className="ml-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
