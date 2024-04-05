import { ClerkProvider, UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Easy Opus",
  description: "A simple task management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <nav className="bg-blue-600 bg-opacity-70 text-white py-4 shadow-md flex">
            <div className="flex justify-center w-full">
              <a href="/" className="text-lg font-bold">
                easy-opus
              </a>
            </div>
            <div className="absolute right-4">
              <UserButton />
            </div>
          </nav>
          <>{children}</>
        </body>
      </html>
    </ClerkProvider>
  );
}
