'use client'
import React from 'react'
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Rubik,Acme } from "next/font/google";


const JosefinSans = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const acme_font = Acme({
  subsets: ["latin"],
  weight: "400",
});

const projects = [
  {
    title: "Order Tracking | AI-Powered MCP Server",
    desc: "An AI-powered MCP server that connects LLMs with real-world tools and APIs, enabling intelligent tool discovery, tool execution, and context-aware responses using Google Gemini.",
    gradient: "from-blue-700 via-cyan-700 to-black",
    img: "mcp.png",
    tab: "mcp-server",
    repo: "https://github.com/virajsawant02/Trackline.git"
  },
  {
    title: "RAG AI Agent",
    desc: "A full-stack application that enables users to upload PDF documents and interact with them through a chat interface using Retrieval-Augmented Generation (RAG) technology.",
    gradient: "from-pink-600 via-purple-700 to-black",
    img:"rag.png",
    tab:"rag-agent",
    repo:""
  },
  {
    title: "Nutri-Track | AI Nutrition Detection System",
    desc: "An AI-powered web application that detects food items from images using YOLOv8, calculates nutritional values, tracks BMI, and provides personalized diet recommendations. Built with React.js, Flask, MySQL, and Deep Learning technologies ",
    gradient: "from-purple-700 via-indigo-700 to-black",
    img:"nutritrack.png",
    tab:"nutri-track"
  },
  
];
function Projects() {
  return (
        <section className={` ${JosefinSans.className} min-h-screen text-white px-4 sm:px-10 py-8 pb-15 flex flex-col justify-between`}>

      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl tracking-widest font-semibold">
         Explore my innovative projects
        </h1>
      </div>

      {/* Main Content */}
      <div className="mt-5">

        {/* Title */}
        <h1 className={` ${acme_font.className} text-5xl md:text-7xl font-extrabold flex items-center justify-center`}>
          Projects
        </h1>

        {/* Underline */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-6" />

       

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {
          projects.map((project, index) => (
            <div key={index}>

              {/* Title + link */}
              <div className="flex items-start justify-between gap-4">
  <h2 className="text-2xl font-semibold leading-tight flex-1">
    {project.title}
  </h2>

  <a
    href={project.repo}
    className="shrink-0 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-400 hover:bg-white/10 hover:text-white transition"
  >
    Repo →
  </a>
</div>

              <p className="text-gray-400 mt-2 text-sm pb-5">
                {project.desc}
              </p>

              {/* Button */}
              <a href={`/projects/${project.tab}`} className="mt-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm hover:bg-white/10 transition">
                Check Project →
              </a>

              {/* Gradient Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="mt-6 h-[250px] rounded-2xl overflow-hidden shadow-lg relative"
              >
                <Image
                  src={`/${project.img}`}
                  alt="Project Image"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}

        </div>
      </div>

    

    </section>
  )
}

export default Projects