import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor Fabonmi — Digital Designer & Developer",
  description: "I design and build thoughtful websites, digital experiences, and AI-powered creative solutions.",
  openGraph: {
    title: "Victor Fabonmi — Digital Designer & Developer",
    description: "Digital experiences built with clarity, craft, and purpose.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}