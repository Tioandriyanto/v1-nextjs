import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tio Andriyanto",
  description: "Created with Next.js 13.4.4",
  keywords: "Next.js, React, TypeScript",
  generator: "Next.js dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    // ikon dari URL, harus ditaruh sebagai array objek
    other: [
      {
        rel: "icon",
        url: "https://img.icons8.com/ios-filled/50/1A1A1A/t-key.png",
      },
    ],
  },
};
//   authors: [ @Tio Andriyanto ],

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
