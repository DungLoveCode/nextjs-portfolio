import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(
    "https://luongtuandung.id.vn"
  ),

  title: {
    default: "Luong Tuan Dung",
    template: "%s | Luong Tuan Dung",
  },

  description:
    "I'm Dung, a student and full-stack developer passionate about building web applications, exploring new technologies, and turning ideas into functional digital experiences.",

  keywords: [
    "Luong Tuan Dung",
    "Dung",
    "Dung Luong",
    "Student Developer",
    "Full-stack Developer",
    "Web Developer",
    "Python Developer",
    "Django",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Cambridge A Levels",
    "A level student",
    "High school student",
    "Student",
  ],

  authors: [
    {
      name: "Dung",
    },
  ],

  creator: "Dung",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Luong Tuan Dung",
    description:
      "Explore my portfolio, projects, technical skills, education, and development journey.",
    url: "https://luongtuandung.id.vn",
    siteName: "Dung's Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dung - Full-stack Developer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luong Tuan Dung",
    description:
      "Explore my projects, skills, and journey as a student and full-stack developer.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
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
        <Navbar />
        {children}
        <Footer />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dung",
      url: "https://luongtuandung.id.vn",
      jobTitle: "Student & Full-stack Developer",
      description:
        "A student and full-stack developer passionate about building web applications, exploring new technologies, and solving practical problems through code.",
    
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Nisai Global School",
        },
        {
          "@type": "EducationalOrganization",
          name: "THPT Con Cuong",
        },
        {
          "@type": "EducationalOrganization",
          name: "Hexagon",
        },
      ],
    
      hasOccupation: {
        "@type": "Occupation",
        name: "Student Developer",
        description:
          "Learning and developing skills in full-stack web development and computer science.",
      },
    
      knowsAbout: [
        "Python",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Django",
        "Web Development",
        "Computer Science",
      ],
    
      sameAs: [
        "https://github.com/DungLoveCode",
        "https://www.facebook.com/dung.luong18",
      ],
    }
    ),
  }}
/>
      </body>
    </html>
  );
}
