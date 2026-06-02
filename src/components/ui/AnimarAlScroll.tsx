"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type AnimarAlScrollProps = {
  children: ReactNode;
};

export default function AnimarAlScroll({ children }: AnimarAlScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
