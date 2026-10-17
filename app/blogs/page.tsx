import type { Metadata } from "next";
import Blogs from "@/components/Blogs";

export const metadata: Metadata = {
  title: "Technical Insights",
  description:
    "Articles on AI engineering, generative AI, RAG, MCP, and modern software development by Viraj Sawant.",
};

export default function Page() {
  return <Blogs />;
}