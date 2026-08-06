import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { metropolisFont } from "./fonts";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className={`${metropolisFont.className} min-h-full flex flex-col`} suppressHydrationWarning>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
