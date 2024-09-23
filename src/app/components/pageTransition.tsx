"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 1000); // Ajustez la durée selon vos besoins
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ y: "100%" }}
          animate={{ 
            y: isTransitioning ? "0%" : "100%",
            transition: {
              duration: 1,
              ease: [0.645, 0.045, 0.355, 1],
            }
          }}
          className="fixed inset-0 z-[300] bg-black"
        />
      </AnimatePresence>
      {children}
    </div>
  );
}