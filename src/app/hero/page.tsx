"use client";

import HeroTransition from "../components/heroTransition";
import { AnimatedText } from "../components/animatedText";
import CubertoButton from "../components/cubertoButton";
import { motion } from "framer-motion";
import StickyCursor from "../components/stickyCursor";
import { useRef } from "react";

export default function Hero() {
  const interactiveElementsRef = useRef<HTMLDivElement>(null);

  return (
    <HeroTransition>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-white text-black p-4">
        <div ref={interactiveElementsRef} className="fixed w-full max-w-5xl mx-auto text-center">
          <AnimatedText
            text="Caleb Raney est un freelance designer & webflow developer"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-center relative"
            el="h1"
            animation={{
              hidden: { y: "100%", scale: 0.8 },
              visible: { y: "0%", scale: 1 },
            }}
            delay={3}
            duration={1}
          />

          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <CubertoButton
              text="Voir mon travail"
              hoverText="Découvrir"
              href="#work"
              bg="bg-white"
              className="text-white bg-black hover:text-black"
            />
            <CubertoButton
              text="Me contacter"
              hoverText="Discutons"
              href="#contact"
              bg="bg-black"
              className="text-black bg-white hover:text-white"
            />
          </motion.div>
        </div>
        <StickyCursor stickyElement={interactiveElementsRef} />
      </div>
    </HeroTransition>
  );
}
