import TechBackground from "@/components/TechBackground";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    default: "Viraj Sawant | Full Stack Developer",
    template: "%s | Viraj Sawant",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Python, Django, FastAPI, SQL and modern web technologies. Showcasing innovative projects with hands on generative AI, technical expertise, and AI-powered solutions focused on creating impactful user experiences.",

  keywords: [
    "Viraj Sawant",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Gen AI developer",
    "Generative AI",
  ],

  authors: [{ name: "Viraj Sawant" }],
  creator: "Viraj Sawant",
  publisher: "Viraj Sawant",

  metadataBase: new URL("https://virajsawant.vercel.app"),

  openGraph: {
    title: "Viraj Sawant | Full Stack Developer",
    description:
      "Explore the portfolio of Viraj Sawant showcasing web development projects, technical skills, and professional experience.",
    url: "https://virajsawant.vercel.app",
    siteName: "Viraj Sawant Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viraj Sawant Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Viraj Sawant | Full Stack Developer",
    description:
      "Explore the portfolio of Viraj Sawant showcasing web development projects, technical skills, and professional experience.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://virajsawant.vercel.app",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#0f0f0f]`}
    >
      <body className="text-white min-h-screen">
        <TechBackground />
        <main className="pb-24">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}