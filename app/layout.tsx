import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { metropolisFont } from "./fonts";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Daniel & Listi Wedding Invitation",
  description: "The wedding invitation of Daniel and Listi.",
  // add thumbnail image for link share
  openGraph: {
    title: "Daniel & Listi Wedding Invitation",
    description: "The wedding invitation of Daniel and Listi.",
    url: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/sampul2.jpg",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/q1kpnykw/image/upload/f_auto,q_auto,w_800/sampul2.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel & Listi Wedding Invitation",
      },
    ],
  },
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
