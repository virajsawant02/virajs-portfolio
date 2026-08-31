"use client";

import Image from "next/image";
import { useState } from "react";

const skills = {
  frontend: [
    { name: "Typescript", icon: "/typescript.png" },
    { name: "Javascript", icon: "/javascript.png" },
    { name: "React.js", icon: "/react.png" },
    { name: "Next.js", icon: "/nextjs.png" },
    { name: "Tailwind CSS", icon: "/tailwind.png" },
  ],

  backend: [
    { name: "Python", icon: "/python.png" },
    { name: "Django", icon: "/django.png" },
    { name: "Fast API", icon: "/fastapi.png" },
    { name: "NodeJS", icon:"/node.png"},
    { name: "ExpressJS", icon:"/express.png"},
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "Oracle", icon: "/plsql.png" },
  ],

  other: [
    { name: "Git & GitHub", icon: "/github.png" },
    { name: "VS Code", icon: "/vscode.png" },
    { name: "Postman", icon: "/postman.png" },
    { name: "AWS", icon: "/aws.png" },
    { name: "Figma", icon: "/figma.png" },
    { name: "Adobe XD", icon: "/xd.png" }

  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] =
    useState<keyof typeof skills>("frontend");

  return (
    <section className="w-full py-10">
      <div className="max-w-4xl mx-auto px-4">

        {/* Tabs */}
        <div className="relative mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-2xl">
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-cyan-500/5" />

  <div className="relative flex items-center justify-between">
    {Object.keys(skills).map((tab) => (
      <button
        key={tab}
        onClick={() =>
          setActiveTab(tab as keyof typeof skills)
        }
        className={`flex-1 rounded-xl py-3 text-sm font-medium transition-all duration-300 ${
          activeTab === tab
            ? "bg-white/10 text-gray-200 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(236,72,153,0.15)]"
            : "text-gray-300 hover:bg-white/5 hover:text-white"
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </div>
</div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-900 rounded-2xl p-2 flex items-center gap-4 border border-white/5 hover:border-pink-500/40 transition-all"
            >
              <div className="relative w-8 h-8">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-white text-sm font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}