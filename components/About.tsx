'use client'
import React from 'react'

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

const experiences = [
  {
    company: "3RI Technology",
    role: "Training",
    duration: "Jan 2026– Present",
    logo: "/3ri.png",
    points: [
      "Completed intensive training in Python Full Stack Development, covering frontend, backend, and database technologies.",
      "Developed dynamic web applications using Python, Django, JavaScript, HTML, CSS, and SQL.",
      "Implemented user authentication, CRUD functionality, RESTful APIs, and database integration in real-world projects.",
      "Collaborated on project development, version control using Git, and application deployment following industry best practices.",
      
    ],
  },
  {
    company: "Alphinity Soft Tech Pvt Ltd",
    role: "Intern",
    duration: "Feb – July 2025",
    logo: "/alphinity.png",
    points: [
      "Developed responsive institute portfolio used by 500+ users.",
      "Implemented REST APIs using Node.js and Express.js.",
      "Integrated MongoDB and CRUD operations.",
      "Built reusable UI components and optimized performance.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    year: "2022 - 2026",
    institute: "Sanjeevan Engineering & Technology Institute, Panhala, Kolhapur",
    logo: "/sanjeevan.png",
  },
  {
    degree: "Higher Secondary Certificate",
    year: "2020 - 2022",
    institute:
      "New English School & Junior College of Science, Shirala, Sangli",
    logo: "/ness.png",
  },
];

function About() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-10 py-8 flex flex-col justify-between">

      {/* Top Bar */}
      <div className="flex justify-between pb-5 items-center">
        {/* <h1 className="text-xl tracking-widest font-semibold">
          VIRAJ SAWANT
        </h1> */}
      </div>

      <div className="w-full flex flex-col items-center justify-center">
          <h2
            className={` ${acme_font.className} text-4xl md:text-6xl font-bold text-center md:text-left`}
          >
            ABOUT ME
          </h2>
          {/* Underline */}
          <div className="w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-4 mx-auto"></div>
      </div>


      {/* Main Content */}
     <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            {/* LEFT CONTENT */}
            <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <span className={` ${JosefinSans.className} text-lg md:text-xl text-gray-400`}>
                Professional
                </span>
                <span className="text-4xl md:text-5xl font-bold">
                Python
                </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold leading-none">
                Full-stack Developer
            </h1>

            <p className={` ${JosefinSans.className} mt-6 max-w-xl text-gray-400 text-base md:text-lg`}>
                Full Stack Developer blending modern frontend and backend technologies with Generative AI to build intelligent, future-ready applications. Skilled in Data Structures and Algorithms (DSA) and strong problem-solving, with a focus on writing efficient, scalable, and high-quality software solutions
            </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

                <Image
                src="/veer.png"
                alt="Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                priority
                />

            </div>
            </div>

        </div>
    </div>

     <section className={`${JosefinSans.className} text-white py-20`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-20">

          {/* EXPERIENCE */}
          <div>
            <h2 className="text-4xl font-bold mb-12">
              Experience
            </h2>

            <div className="relative border-l border-gray-700 ml-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-14 pb-16"
                >
                  <div className="absolute -left-8 top-0">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-700">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold">
                    {exp.company}
                  </h3>

                  <p className="text-gray-400 text-lg mb-4">
                    {exp.role}
                    {exp.duration && ` | ${exp.duration}`}
                  </p>

                  <ul className="space-y-2 list-disc ml-5 text-gray-300">
                    {exp.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h2 className="text-4xl font-bold mb-12">
              Education
            </h2>

            <div className="relative border-l border-gray-700 ml-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-14 pb-16"
                >
                  <div className="absolute -left-8 top-0">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border border-gray-700">
                      <Image
                        src={edu.logo}
                        alt={edu.degree}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-gray-400 text-lg">
                    {edu.year}
                  </p>

                  <h3 className="text-3xl font-bold mt-1">
                    {edu.degree}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    {edu.institute}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    </section>
  )
}

export default About