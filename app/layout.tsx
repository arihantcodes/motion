import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion-Notion clone ",
  description: "A clone of the Motion-Notion website",
  icons:{
    icon:[
      {media: "(prefers-color-scheme: light)",
      url:"/logo-dark.svg",
      href:"/logo-dark.svg",},
      {media: "(prefers-color-scheme: dark)",
      url:"/logo.svg",
      href:"/logo.svg",},

    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
