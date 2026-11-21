import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Democratizing Visual Access",
  description: "Democratizing Visual Access",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
