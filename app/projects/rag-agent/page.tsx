import Ragproject from "@/components/Ragproject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ai Powered Order Tracking MCP Server",
  description:
    "Built an AI-powered MCP server that connects LLMs with real-world tools and APIs for intelligent, automated task execution and seamless data retrieval.",
};

export default function BagpackProjectPage() {
  return <Ragproject/>
}