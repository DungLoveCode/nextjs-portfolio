import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luong Tuan Dung | Full-stack Developer",
    template: "%s | Luong Tuan Dung",
  },
  description:
    "Personal portfolio of Luong Tuan Dung, a student and full-stack developer passionate about building digital experiences.",
  keywords: [
    "Luong Tuan Dung",
    "Full-stack Developer",
    "Python",
    "Django",
    "JavaScript",
    "React",
    "Next.js",
    "Student",
    "A Level Student",
  ],
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
