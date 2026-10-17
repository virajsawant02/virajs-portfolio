"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { Rubik, Acme } from "next/font/google";
import styles from "./Blogs.module.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const acme = Acme({ subsets: ["latin"], weight: "400" });

/* ---------- Cover illustrations (original SVG, 16:9) ---------- */

const svgText = {
  fill: "#93c5fd",
  fontSize: 11,
  fontFamily: "ui-monospace, Menlo, monospace",
  textAnchor: "middle" as const,
  dominantBaseline: "middle" as const,
};

function Node({ cx, cy, w = 56, label, strong = false }: { cx: number; cy: number; w?: number; label: string; strong?: boolean }) {
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - 13}
        width={w}
        height={26}
        rx={7}
        fill={strong ? "#14284d" : "#101c36"}
        stroke={strong ? "#3b82f6" : "#1e3a8a"}
        strokeWidth={1.25}
      />
      <text x={cx} y={cy + 0.5} {...svgText}>{label}</text>
    </g>
  );
}

function AgentCover() {
  const tools = [
    { cx: 56, cy: 42, label: "API" },
    { cx: 264, cy: 42, label: "DB" },
    { cx: 56, cy: 138, label: "MCP" },
    { cx: 264, cy: 138, label: "Tools" },
  ];
  return (
    <svg viewBox="0 0 320 180" role="img" aria-hidden="true" focusable="false">
      <rect width="320" height="180" fill="#0b1324" />
      {tools.map((t) => (
        <line key={t.label} x1={160} y1={90} x2={t.cx} y2={t.cy} stroke="#1e3a8a" strokeWidth={1.5} strokeDasharray="4 4" />
      ))}
      {tools.map((t) => (
        <Node key={t.label} {...t} />
      ))}
      <Node cx={160} cy={90} w={76} label="LLM" strong />
    </svg>
  );
}

function RagCover() {
  const arrow = (x1: number, x2: number, y: number) => (
    <line x1={x1} y1={y} x2={x2} y2={y} stroke="#3b82f6" strokeWidth={1.5} />
  );
  return (
    <svg viewBox="0 0 320 180" role="img" aria-hidden="true" focusable="false">
      <rect width="320" height="180" fill="#0b1324" />
      <text x={18} y={34} fill="#60a5fa" fontSize={10} fontFamily="ui-monospace, Menlo, monospace" letterSpacing="1.5">RAG</text>
      {arrow(74, 96, 58)}
      {arrow(152, 174, 58)}
      {arrow(230, 252, 58)}
      <Node cx={46} cy={58} label="Docs" />
      <Node cx={124} cy={58} label="Embed" />
      <Node cx={202} cy={58} label="VectorDB" />
      <Node cx={280} cy={58} label="LLM" strong />

      <line x1={18} y1={92} x2={302} y2={92} stroke="#16264a" strokeWidth={1} />

      <text x={18} y={114} fill="#60a5fa" fontSize={10} fontFamily="ui-monospace, Menlo, monospace" letterSpacing="1.5">FINE-TUNING</text>
      {arrow(74, 96, 138)}
      {arrow(152, 174, 138)}
      <Node cx={46} cy={138} label="Data" />
      <Node cx={124} cy={138} label="Train" />
      <Node cx={202} cy={138} label="Model" strong />
    </svg>
  );
}

function CodingAgentCover() {
  const lines = [
    { y: 62, w: 120, c: "#1e3a8a" },
    { y: 78, w: 160, c: "#1e3a8a" },
    { y: 94, w: 96, c: "#3b82f6", hl: true },
    { y: 110, w: 140, c: "#3b82f6", hl: true },
    { y: 126, w: 84, c: "#1e3a8a" },
  ];
  return (
    <svg viewBox="0 0 320 180" role="img" aria-hidden="true" focusable="false">
      <rect width="320" height="180" fill="#0b1324" />
      <rect x={36} y={22} width={248} height={136} rx={10} fill="#0f1a30" stroke="#1e3a8a" strokeWidth={1.25} />
      <circle cx={52} cy={37} r={3} fill="#1e3a8a" />
      <circle cx={64} cy={37} r={3} fill="#1e3a8a" />
      <circle cx={76} cy={37} r={3} fill="#1e3a8a" />
      <line x1={36} y1={50} x2={284} y2={50} stroke="#16264a" />
      {lines.map((l) => (
        <g key={l.y}>
          {l.hl && <rect x={44} y={l.y - 6} width={232} height={14} rx={3} fill="#3b82f6" opacity={0.14} />}
          <rect x={64} y={l.y - 2} width={l.w} height={5} rx={2.5} fill={l.c} />
          {l.hl && <text x={50} y={l.y + 1} fill="#60a5fa" fontSize={11} fontFamily="ui-monospace, Menlo, monospace" dominantBaseline="middle">+</text>}
        </g>
      ))}
      <rect x={212} y={136} width={60} height={16} rx={8} fill="#14284d" stroke="#3b82f6" />
      <text x={242} y={144.5} {...svgText} fontSize={9}>agent</text>
    </svg>
  );
}

/* ---------- Content ---------- */
/* Replace each href with your real article URL (Medium, dev.to, Hashnode, or /blogs/your-slug). */

type Post = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  readTime: string;
  href: string;
  cover: ReactNode;
};

const posts: Post[] = [
  {
    category: "AI ENGINEERING",
    title: "From Chatbots to AI Agents: How AI Is Changing Software Development",
    description:
      "Discover how LLMs, APIs, tool calling, and MCP enable AI systems to interact with external tools and perform useful tasks.",
    tags: ["Python", "AI Agents", "MCP"],
    readTime: "8 min read",
    href: "https://modelcontextprotocol.io/docs/getting-started/intro",
    cover: <AgentCover />,
  },
  {
    category: "GENERATIVE AI",
    title: "RAG vs Fine-Tuning: Choosing the Right Approach for AI Applications",
    description:
      "Understand retrieval-augmented generation, embeddings, vector databases, and fine-tuning through practical examples and technical trade-offs.",
    tags: ["RAG", "LLMs", "Vector Databases"],
    readTime: "6 min read",
    href: "https://docs.nvidia.com/rag/latest/",
    cover: <RagCover />,
  },
  {
    category: "DEVELOPER TRENDS",
    title: "AI Coding Agents: Will Developers Write Less Code and Engineer More?",
    description:
      "Explore how AI coding tools are changing software development, testing, debugging, code reviews, and engineering workflows.",
    tags: ["AI Tools", "Python", "Testing"],
    readTime: "6 min read",
    href: "https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents",
    cover: <CodingAgentCover />,
  },
];

/* ---------- Component ---------- */

export default function Blogs() {
  const reduce = useReducedMotion();

  const list: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.45, ease: "easeOut" } },
  };

  return (
    <section className={`${styles.section} ${rubik.className}`} aria-labelledby="insights-heading">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={reduce ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className={styles.eyebrow}>THOUGHTS • TECHNOLOGY • ENGINEERING</p>
          <h1 id="insights-heading" className={`${styles.heading} ${acme.className}`}>
            Technical Insights
          </h1>
          <div className="w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent my-4 mx-auto"></div>
          <p className={styles.subtitle}>
            Exploring AI engineering, modern software development, and the technologies shaping what&apos;s next.
          </p>
        </motion.header>

        <motion.ul
          className={styles.grid}
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post) => {
            return (
              <motion.li key={post.title} variants={item} className={styles.cell}>
                <article className={styles.card}>
                  <div className={styles.cover}>{post.cover}</div>

                  <div className={styles.body}>
                    <p className={styles.category}>{post.category}</p>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.description}>{post.description}</p>

                    <ul className={styles.tags} aria-label="Topics">
                      {post.tags.map((tag) => (
                        <li key={tag} className={styles.tag}>{tag}</li>
                      ))}
                    </ul>

                    <div className={styles.footer}>
                      <span className={styles.meta}>
                        <Clock size={14} aria-hidden="true" />
                        {post.readTime}
                      </span>
                      <a
                        href={post.href}
                        className={styles.link}
                        aria-label={`Read article: ${post.title}`}
                    >
                        Read Article
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}