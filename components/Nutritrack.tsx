'use client'
import React from 'react'
import Image from "next/image";
import Link from "next/link";


const features = [
  {
    title: "Developed a Retrieval",
    description:
      "Developed real-time food recognition using YOLOv8 deep learning model.",
  },
  {
    title: "Internal Work",
    description: "Automated calorie and nutrition analysis from uploaded food images.",
  },
  {
    title: "LLM-powered question answering",
    description: "Implemented BMI-based personalized diet recommendation engine.",
    highlight: true,
  },
  {
    title: "Full stack application",
    description:
      "Built secure user authentication and meal history management.",
  },
  {
    title: "Optimized retrieval",
    description:
      "Designed an interactive dashboard for nutrition tracking and health insights.",
  },
  {
    title: "scalable architecture",
    description:
      "Integrated MySQL database for storing user profiles, meal logs, and health records.",
  },
  
];

export default function Nutritrack () {
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
          Nutri-Track | AI Nutrition Detection System
        </h1>

        {/* Intro */}
        <p className="text-lg leading-relaxed text-gray-200 max-w-5xl">
            Built an intelligent nutrition tracking platform that uses YOLOv8 Computer Vision to identify food items from images and automatically calculate nutritional values including calories, proteins, fats, and carbohydrates. The system analyzes user health metrics such as BMI and generates personalized diet recommendations based on fitness goals.
        </p>

        {/* Project Screenshot */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-700">
          <Image
            src="/nutritrack.png"
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
                {" "}
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
           Python, Flask, React.js, MySQL, YOLOv8, NumPy, Pandas, JWT, Git/GitHub.
        </section>

        
      </div>
    </main>
  )
}

