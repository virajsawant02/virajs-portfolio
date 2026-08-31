
import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Viraj Sawant, a Full Stack Developer specializing in React, Next.js, Python, and Generative AI.",
};

export default function Page() {
  return <About/>
}