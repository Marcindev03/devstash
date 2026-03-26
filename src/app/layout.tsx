import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevStash",
  description: "DevStash - Your AI powered developer stash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
