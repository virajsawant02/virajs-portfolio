'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";


const features = [
  {
    title: "Developed a Retrieval",
    description:
      "Augmented Generation (RAG) based PDF Chatbot that enables users to upload PDFs and interact with document content through natural language conversations.",
  },
  {
    title: "Internal Work",
    description: "Implemented PDF text extraction, chunking, vector embeddings, and semantic search using FAISS/Pinecone for efficient document retrieval.",
  },
  {
    title: "LLM-powered question answering",
    description: "Integrated LLM-powered question answering to generate context-aware responses based on retrieved document sections",
    highlight: true,
  },
  {
    title: "Full stack application",
    description:
      "Built a responsive full-stack application with document management, chat interface, and real-time query processing.",
  },
  {
    title: "Optimized retrieval",
    description:
      "Optimized retrieval accuracy through embedding-based similarity search, improving response relevance and reducing hallucinations.",
  },
  {
    title: "scalable architecture",
    description:
      "Designed a scalable architecture for indexing, storing, and querying large document collections.",
  },
  
];

export default function Ragproject () {
  return (
    <main className="min-h-screen  text-white ">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-lg hover:text-gray-300 transition"
        >
          ← Back to Projects
        </Link>

        {/* Heading */}
        <h1 className="text-4xl font-bold mt-6 mb-8">
          PDF Chatbot with RAG Technology
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-200 max-w-5xl">
         Built an AI-powered document assistant using Retrieval-Augmented Generation (RAG), enabling users to upload PDFs and query document content through natural language. Implemented text extraction, vector embeddings, semantic search , and LLM-based response generation for accurate context-aware answers.
        </p>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-700">
          <Image
            src="/rag.png"
            alt="Bagpack Project"
            width={1400}
            height={800}
            className="w-full object-cover"
          />
        </div>



        {/* Key Features */}
        <section className="mt-12">
            <h2 className="mb-6 text-2xl font-bold">Key Features</h2>

        <ul className="space-y-4">
            {features.map((feature) => (
            <li
                key={feature.title}
                className="flex items-start gap-3 text-lg text-gray-200"
            >
                <span className="mt-1 text-blue-500">•</span>

                <p>
                <strong className="font-semibold text-white">
                    {feature.title}:
                </strong>{" "}
                <span
                    
                >
                    {feature.description}
                </span>
                </p>
            </li>
            ))}
        </ul>
        </section>

        {/* Technologies */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6">Technologies Used :</h2>
           Next.js, TypeScript, Flask, LangChain, ChromaDB, Ollama
        </section>

        
      </div>
    </main>
  )
}

