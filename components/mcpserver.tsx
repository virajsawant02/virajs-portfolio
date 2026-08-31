'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    title: 'AI-powered MCP Server',
    description:
      'Built an AI-powered Model Context Protocol (MCP) server that enables LLMs to discover and interact with real-world tools and APIs.',
  },
  {
    title: 'Dynamic Tool Discovery',
    description:
      'Implemented tool discovery and schema definitions so AI models can understand available tools and their required parameters.',
  },
  {
    title: 'Shipment Tracking',
    description:
      'Integrated shipment tracking functionality using the AfterShip API, allowing users to retrieve real-time tracking information through natural language queries.',
  },
  {
    title: 'LLM Tool Calling',
    description:
      'Integrated Google Gemini to interpret user requests, select the appropriate MCP tool, and generate context-aware responses from tool results.',
    highlight: true,
  },
  {
    title: 'Full-stack Architecture',
    description:
      'Connected a React frontend with a Node.js backend and FastAPI-based MCP server to provide seamless communication between the user, LLM, and external APIs.',
  },
  {
    title: 'API-based Tool Execution',
    description:
      'Implemented structured tool execution through REST endpoints for discovering tools and executing selected tools with validated arguments.',
  },
]

export default function McpProject() {
  return (
    <main className="min-h-screen text-white">
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
          AI-Powered MCP Server
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-200 max-w-5xl">
          Built an AI-powered Model Context Protocol (MCP) server that connects
          LLMs with real-world tools and APIs. Integrated Google Gemini with
          shipment tracking functionality to enable natural language tool
          discovery, execution, and context-aware responses.
        </p>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-700">
          <Image
            src="/mcp.png"
            alt="MCP Server Project"
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
                  </strong>{' '}

                  <span>{feature.description}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6">
            Technologies Used:
          </h2>

          <p className="text-lg text-gray-200">
            React, Node.js, Express.js, Python, FastAPI, MCP, Google Gemini,
            AfterShip API, REST API
          </p>
        </section>

        {/* GitHub Repository */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6">
            Source Code
          </h2>

          <a
            href="https://github.com/virajsawant02/Trackline.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200 transition"
          >
            View GitHub Repository →
          </a>
        </section>

      </div>
    </main>
  )
}

