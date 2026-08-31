
import Projects from "@/components/Projects";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "My Projects",
  description:
      "Explore a collection of full-stack web applications, AI-powered solutions, and software development projects showcasing expertise in React, Next.js, Python, Generative AI, and modern technologies.",
};

export default function Page() {
  return <Projects/>
}