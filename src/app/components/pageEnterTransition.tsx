"use client";

import { motion } from "framer-motion";

export default function PageEnterTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
    >
      {children}
    </motion.div>
  );
}
