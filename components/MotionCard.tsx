"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionCard({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -6,
        boxShadow:
          "0 20px 40px -12px rgba(200,164,78,0.15), 0 8px 20px -8px rgba(0,0,0,0.1)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
