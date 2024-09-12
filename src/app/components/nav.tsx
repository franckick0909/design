"use client";

import { motion } from "framer-motion";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { navLinks } from "../data/data";
import AnimatedLink from "./animatedLink";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menuVariants = {
    closed: { 
      opacity: 0.7, 
      x: "100%", 
      transition: { 
        duration: 0.5, 
        ease: [0.76, 0, 0.24, 1], 
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      } 
    },
    open: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: [0.76, 0, 0.24, 1], 
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    },
  };

  const linkVariants = {
    closed: { 
      opacity: 0, 
      y: 20, 
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] 
      } 
    },
    open: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] 
      } 
    },
  };

  return (
    <>
      <button 
        title="Menu"
        type="button"
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 right-5 z-50 p-2"
      >
        <div className={`w-8 h-0.5 bg-black mb-2 transition-all ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></div>
        <div className={`w-8 h-0.5 bg-black mb-2 transition-all ${isOpen ? "opacity-0" : ""}`}></div>
        <div className={`w-8 h-0.5 bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
      </button>

      <motion.nav
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 right-0 h-full w-full xl:w-1/2 bg-neutral-100 z-40 flex flex-col justify-start items-start p-20 gap-6"
      >
        {navLinks.map((item, index) => (
          <motion.div
            key={index}
            variants={linkVariants}
            className="overflow-hidden"
          >
            <AnimatedLink 
              href={item.href}
              text={item.name}
              isActive={pathname === item.href}
              index={index}
            />
          </motion.div>
        ))}

        <motion.div
          variants={linkVariants}
          className="mt-12"
        >
          <h3 className="text-xl mb-4">Social</h3>
          <div className="flex space-x-4">
            {["LinkedIn", "Behance", "Malt", "Instagram", "YouTube", "Twitter", "GitHub"].map((social, index) => (
              <a key={index} href="#" className="text-sm hover:underline">{social}</a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
}
