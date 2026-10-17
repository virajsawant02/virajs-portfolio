"use client";

import { useEffect, useRef } from "react";

/* ---------- Settings you can tweak ---------- */
const CONFIG = {
  density: 14000,        // lower = more particles
  maxParticles: 110,
  linkDistance: 130,     // distance for particle-to-particle lines
  mouseRadius: 170,      // cursor influence area
  repelStrength: 2.2,
  baseSpeed: 0.35,
  clickForce: 14,
  glyphChance: 0.12,     // % of nodes shown as tech symbols
  colors: ["34,211,238", "168,85,247", "236,72,153"], // cyan, purple, pink (rgb)
};

const GLYPHS = ["</>", "{ }", "AI", "API", "tsx", "py", "js", "01", "RAG", "MCP"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  ex: number; // extra impulse (from click / scroll)
  ey: number;
  r: number;
  color: string;
  glyph?: string;
};

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let particles: Particle[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };
    let lastScrollY = window.scrollY;
    let scrollImpulse = 0;

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const createParticle = (): Particle => {
      const isGlyph = Math.random() < CONFIG.glyphChance;
      return {
        x: rand(0, w),
        y: rand(0, h),
        vx: rand(-CONFIG.baseSpeed, CONFIG.baseSpeed),
        vy: rand(-CONFIG.baseSpeed, CONFIG.baseSpeed),
        ex: 0,
        ey: 0,
        r: rand(1, 2.2),
        color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
        glyph: isGlyph
          ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          : undefined,
      };
    };

    let lastW=0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const newW = window.innerWidth;
      const newH = window.innerHeight;
      const widthChanged = newW !== lastW;

  w = newW;
  h = newH;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  
   if (!widthChanged && particles.length) return; // address-bar resize: keep particles
  lastW = newW;

      const count = Math.min(
        CONFIG.maxParticles,
        Math.floor((w * h) / CONFIG.density)
      );
      particles = Array.from({ length: count }, createParticle);
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // scroll impulse decays smoothly
      scrollImpulse *= 0.92;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // cursor interaction: push away
        if (mouse.active && !reduceMotion) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.mouseRadius && dist > 0.1) {
            const force = (1 - dist / CONFIG.mouseRadius) * CONFIG.repelStrength;
            p.ex += (dx / dist) * force * 0.15;
            p.ey += (dy / dist) * force * 0.15;
          }
        }

        // move
        if (!reduceMotion) {
          p.x += p.vx + p.ex;
          p.y += p.vy + p.ey - scrollImpulse * 0.15;
          p.ex *= 0.94; // friction
          p.ey *= 0.94;
        }

        // wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // draw node or glyph
        if (p.glyph) {
          ctx.font = "11px ui-monospace, SFMono-Regular, Menlo, monospace";
          ctx.fillStyle = `rgba(${p.color},0.55)`;
          ctx.fillText(p.glyph, p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color},0.8)`;
          ctx.fill();
        }

        // lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.linkDistance) {
            const alpha = (1 - dist / CONFIG.linkDistance) * 0.25;
            ctx.strokeStyle = `rgba(${p.color},${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // lines from cursor to nearby particles
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CONFIG.mouseRadius * 1.3) {
            const alpha = (1 - dist / (CONFIG.mouseRadius * 1.3)) * 0.6;
            ctx.strokeStyle = `rgba(${p.color},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // soft glow around cursor
      if (mouse.active) {
        const g = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, CONFIG.mouseRadius
        );
        g.addColorStop(0, "rgba(168,85,247,0.12)");
        g.addColorStop(1, "rgba(168,85,247,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, CONFIG.mouseRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    /* ---------- Event handlers ---------- */
    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
    };
    const onClick = (e: PointerEvent) => {
      // shockwave
      for (const p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < 260 && dist > 0.1) {
          const force = (1 - dist / 260) * CONFIG.clickForce;
          p.ex += (dx / dist) * force * 0.3;
          p.ey += (dy / dist) * force * 0.3;
        }
      }
    };
    const onScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      scrollImpulse = Math.max(-40, Math.min(40, scrollImpulse + delta));
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onClick);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}