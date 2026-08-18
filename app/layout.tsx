import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teaching Practice Lab",
  description: "An independent, public learning space for practicing evidence-based instructional reasoning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
