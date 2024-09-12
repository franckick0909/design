"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  href: string;
  text: string;
  isActive?: boolean;
  index: number;
}

export default function AnimatedLink({ href, text, isActive = false, index }: AnimatedLinkProps) {
  return (
    <div className="relative overflow-visible group">
      <Link
        href={href}
        className={`relative z-10 text-6xl font-light transition-colors flex items-center font-inter tracking-tighter ${
          isActive ? "text-black" : "text-black"
        }`}
      >
        <span className={`w-10 h-10 mr-4 rounded-full bg-white flex items-center justify-center text-black text-lg font-normal font-sans shadow-md ${isActive ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300 ease-in-out group-hover:opacity-100`}>
          {index + 1 + ` .`}
        </span>
        <span className="relative overflow-visible inline-flex items-center leading-[1.2em] h-[1.2em] perspective-1000">
          <span className="inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3">
            {text}
          </span>
          <span className="absolute top-full left-0 inline-block whitespace-nowrap font-sans">
            {text.split('').map((letter, i) => (
              <motion.span 
                key={i} 
                className="inline-block transition-transform duration-700 ease-in-out group-hover:-translate-y-full group-hover:skew-y-3 text-black"
                style={{ transitionDelay: `${i * 25}ms` }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </span>
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-14 right-0 h-0.5 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        )}
      </Link>
    </div>
  );
}
