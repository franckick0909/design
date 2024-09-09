"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [showBlue, setShowBlue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBlue(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const curveAmount = 0; // Ajustez cette valeur pour plus ou moins de courbure

  return (
    <>
      <AnimatePresence>
        {showBlue && (
          <motion.div
            className="fixed inset-0 z-50 bg-blue-500"
            initial={{ clipPath: `inset(100% 0 0 0)` }}
            animate={{ clipPath: `inset(0 0 0 0)` }}
            exit={{ 
              clipPath: [
                `inset(0 0 0 0)`,
                `inset(0 0 ${100}% 0 round 0 0 ${curveAmount}% ${curveAmount}%)`,
                `inset(0 0 100% 0)`
              ]
            }}
            transition={{ 
              duration: 1,
              ease: [0.645, 0.045, 0.355, 1],
              stiffness: 100,
              damping: 10,
              mass: 1,
              restDelta: 0.001,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}