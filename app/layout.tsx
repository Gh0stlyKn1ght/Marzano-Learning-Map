import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teaching Practice Lab",
  description: "Game-based instructional mastery platform",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
