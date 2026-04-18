import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}