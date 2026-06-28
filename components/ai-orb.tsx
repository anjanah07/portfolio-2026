"use client";

import { motion } from "framer-motion";

export function AiOrb() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
      <motion.div
        className="ai-orb relative h-44 w-44 rounded-full md:h-60 md:w-60"
        animate={{
          rotate: 360,
          scale: [1, 1.04, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {[0, 1, 2, 3, 4].map((item) => (
        <motion.span
          key={item}
          className="absolute h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(112,245,255,0.9)]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10 + item * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${80 + item * 18}px ${80 + item * 18}px`,
          }}
        />
      ))}

      <div className="absolute bottom-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs text-slate-300 backdrop-blur">
        agent.graph.status: online
      </div>
    </div>
  );
}
