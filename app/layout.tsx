import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Daniel & Listi Wedding Invitation",
  description: "The wedding invitation of Daniel and Listi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${playfair.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
