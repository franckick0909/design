"use client"

import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  delay, 
  duration = 0.5, 
  staggerChildren = 0.1 
}: AnimatedTextProps) {
  const lines = text.split("\n");

  return (
    <motion.div
      className={`${className} `}
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: staggerChildren } }
      }}
    >
      {lines.map((line, lineIndex) => (
        <motion.div key={lineIndex} className="text-center w-full ">
          {line.split(" ").map((word, wordIndex) => (
            <motion.span
              key={`${lineIndex}-${wordIndex}`}
              className="inline-block mr-4"
              variants={wordVariants}
              transition={{ delay: delay, duration: duration }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
