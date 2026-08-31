"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";
import SkillsMarquee from "./SkillsMarquee";
import Skills from "./Techskill";
import { Rubik,Acme } from "next/font/google";

const JosefinSans = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const acme_font = Acme({
  subsets: ["latin"],
  weight: "400",
});

const tagClass =
  "px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 shadow-md";

export default function Hero(){
  
  return (
    <section className={`${JosefinSans.className} min-h-screen bg-[#0f0f0f] text-white flex flex-col justify-between px-6 py-6`}>

      {/* Top Bar */}
      <div className="flex items-center gap-2">
        

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300">
          <span>sawantviraj60@gmail.com</span>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
        </div>
        
        
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center mt-10">

        {/* Hi + tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <h2 className="text-5xl font-bold">Hi,</h2>
          <motion.span whileHover={{ scale: 1.1 }} className={tagClass}>
            I'm a Fullstack Developer
          </motion.span>
        </motion.div>

        {/* Big Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={` ${acme_font.className} text-[90px] md:text-[120px] font-extrabold leading-none mt-4`}
        >
          I,m Viraj Sawant
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl text-lg mt-4 leading-relaxed"
        >
          Full Stack Developer with expertise in modern frontend and backend technologies, building scalable and high-performance web applications. Strong foundation in Data Structures and Algorithms (DSA), problem-solving, and Generative AI, with a passion for delivering innovative software solutions.
        </motion.p>

        {/* Floating Tags */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className={tagClass}
          >
            A Passionate Genarative AI Devloper
          </motion.span>

          <motion.span
            whileHover={{ scale: 1.1 }}
            className={tagClass}
          >
            Expert in UIUX 
          </motion.span>
        </div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2"
        >
          Available For Work
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        </motion.div>
        <div className="text-xl pt-5 flex items-center gap-3 justify-center-safe ">
            
            <a href="https://github.com/virajsawant02" className=" w-full flex flex-col items-center pointer-coarse">
              <img src={'/github.png'} width={40} alt="github"/>
            </a>
            <a  href="/Viraj Sawant Python Fullstack.pdf" className=" text-[15px] pointer-coarse px-5 py-2 rounded-full pointer-coarse bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2">Resume</a>
             
            <a href="https://www.linkedin.com/in/viraj-sawant-2s1v5s1/" className=" w-full pointer-coarse flex flex-col items-center">
              <img src={'/linkedin.png'} width={40} alt="github"/>
            </a>  

        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="flex flex-col justify-center">
        {/* <div className="flex gap-2 bg-white/5 border border-white/10 backdrop-blur-md px-3 py-2 rounded-full">
          {["Home", "Projects", "About", "Contact"].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 rounded-full text-gray-300 hover:bg-white/10 transition"
            >
              {item}
            </motion.button>
          ))}
        </div> */}
        <Skills/> 
        
        
      </div>

    </section>
  );
}