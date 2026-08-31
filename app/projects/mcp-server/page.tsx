import { MoveLeft } from 'lucide-react';
import React from 'react';

function page() {
  return (
    <div className="w-full px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 pb-5 flex flex-col">

      {/* Back to Projects */}
      <a
        href="/projects"
        className="inline-flex items-center gap-2 pt-5 pb-4 text-lg text-gray-300 hover:text-white transition"
      >
        <MoveLeft size={22} />
        Back to Projects
      </a>

      {/* Project Title */}
      <h1 className="text-4xl font-bold mb-6 text-white">
        Order Tracking AI-Powered MCP Server
      </h1>

      {/* Project Overview */}
      <p className="text-lg text-gray-300 mb-4">
        OrderTracking is an AI-powered Model Context Protocol (MCP) server that
        enables Large Language Models (LLMs) to interact with real-world
        tools and APIs. The system integrates Google Gemini with MCP tools
        to understand user requests, dynamically select the appropriate
        tool, execute it, and generate context-aware responses.
      </p>

      {/* Project Image */}
      <img
        src="/mcp.png"
        alt="ASTRA MCP Server"
        className="w-full h-auto rounded-lg mb-6"
      />

      {/* Key Features */}
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Key Features :
      </h2>

      <ul className="list-disc list-inside text-lg text-gray-300 mb-4">

        <li>
          <span className="font-semibold">
            Model Context Protocol (MCP) :
          </span>{' '}
          Implemented an MCP-based architecture that allows AI models to
          discover and interact with external tools.
        </li>

        <li>
          <span className="font-semibold">
            Dynamic Tool Discovery :
          </span>{' '}
          Exposes available tools and their JSON schemas so the LLM can
          understand how and when to use each tool.
        </li>

        <li>
          <span className="font-semibold">
            AI Tool Calling :
          </span>{' '}
          Integrated Google Gemini to analyze user requests and automatically
          select the appropriate tool for execution.
        </li>

        <li>
          <span className="font-semibold">
            Shipment Tracking :
          </span>{' '}
          Integrated the AfterShip API to retrieve shipment tracking
          information using order IDs and courier details.
        </li>

        <li>
          <span className="font-semibold">
            Tool Execution API :
          </span>{' '}
          Implemented structured APIs for discovering tools and executing
          selected tools with validated arguments.
        </li>

        <li>
          <span className="font-semibold">
            Context-Aware Responses :
          </span>{' '}
          Processes tool results and sends them back to the LLM to generate
          meaningful responses based on real-time data.
        </li>

        <li>
          <span className="font-semibold">
            Full-Stack Integration :
          </span>{' '}
          Connected React, Node.js, FastAPI, MCP, Gemini, and external APIs
          into a complete AI-powered workflow.
        </li>

      </ul>

      {/* Technologies */}
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Technologies Used :
      </h2>

      <ul className="list-disc list-inside text-lg text-gray-300 mb-4">

        <li>
          <span className="font-semibold">React.js :</span>{' '}
          For building the interactive frontend chat interface.
        </li>

        <li>
          <span className="font-semibold">Node.js & Express.js :</span>{' '}
          Used as the backend layer for handling frontend requests and
          communicating with the MCP server.
        </li>

        <li>
          <span className="font-semibold">Python & FastAPI :</span>{' '}
          Used to build the MCP server and expose tool discovery and
          execution endpoints.
        </li>

        <li>
          <span className="font-semibold">Model Context Protocol :</span>{' '}
          Used to connect the LLM with external tools and services.
        </li>

        <li>
          <span className="font-semibold">Google Gemini :</span>{' '}
          Used for natural language understanding, function calling, and
          context-aware response generation.
        </li>

        <li>
          <span className="font-semibold">AfterShip API :</span>{' '}
          Used for real-time shipment tracking information.
        </li>

        <li>
          <span className="font-semibold">REST API :</span>{' '}
          Used for communication between the frontend, backend, MCP server,
          and external services.
        </li>

      </ul>

      {/* Project Workflow */}
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Project Workflow :
      </h2>

      <p className="text-lg text-gray-300 mb-4">
        The user sends a natural language request from the React frontend.
        The Node.js backend communicates with the FastAPI-based MCP server,
        which provides the available tools and their schemas. Google Gemini
        analyzes the request and determines which tool should be executed.
        The MCP server then executes the selected tool, retrieves the result
        from the external API, and returns the data to Gemini. Finally,
        Gemini generates a context-aware response that is displayed to the
        user.
      </p>


    </div>
  );
}

export default page;

