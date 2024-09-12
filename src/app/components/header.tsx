"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav";

export default function Header() {
    
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div
        onClick={() => setIsActive(!isActive)}
        className="fixed top-0 right-0 m-5 z-50 w-16 h-16 rounded-full bg-violet-600 cursor-pointer flex flex-col justify-center items-center gap-2"
      >
        <motion.div
          animate={isActive ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          className="w-8 h-0.5 bg-white"
        />
        <motion.div
          animate={isActive ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          className="w-8 h-0.5 bg-white"
        />
      </div>

      <AnimatePresence mode="wait">
        {isActive && (
          <Nav setIsActive={setIsActive} />
        )}
      </AnimatePresence>
    </header>
  );
}