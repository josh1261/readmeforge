import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReadMeForge",
  description: "Template-based GitHub README generator for job-ready projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
