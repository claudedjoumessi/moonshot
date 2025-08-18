import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moonshot - Your personal assistant",
  description: "Crafted with art and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased dark`}>{children}</body>
    </html>
  );
}
