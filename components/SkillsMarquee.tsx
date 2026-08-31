"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills:string[] = [
  "HTML5",
  "React.js",
  "Oracle DB",
  "Figma",
  "Adobe XD",
  "CSS",
  "Framer ",
  "Javascript",
  "Python",
  "Prompt",
  "RAG agents"
  
];

export default function SkillsMarquee() {

  

  return (
    <>
      <div className="w-full flex items-center justify-center text-white font-bold text-2xl">
        <h2>- TECH STACK -</h2>
      </div>
      
      <div className="relative w-full overflow-hidden py-6">
        
        {/* Gradient fade (optional but premium look) */}
        <div className="absolute left-0 top-0 w-24 h-full bg-linear-to-r from-[#0f0f0f] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-linear-to-l from-[#0f0f0f] to-transparent z-10" />

        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15, // increase = slower
          }}
        >
          {/* duplicate twice */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 whitespace-nowrap"
            >
              {skill}
            </div>
          ))}
        </motion.div>

      </div>
    </>
    
  );
}