import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

export default function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  border-stone-200 rounded-md mb-2 overflow-hidden shadow-lg bg-black text-white ">
      <button
        type="button"
        className="w-full p-4 text-left flex justify-between items-center relative"
        onClick={toggleCollapse}
      >
        <span className="text-lg font-normal font-inter">{title}</span>
        <div className="relative w-6 h-6">
          <motion.span
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-current"
            animate={{ rotate: isOpen ? 0 : 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-current"
            animate={{ rotate: isOpen ? 0 : 90 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

