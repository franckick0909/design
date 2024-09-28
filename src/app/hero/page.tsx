"use client";

import EnterHero from '../components/enterHero';
import { AnimatedText } from "../components/animatedText";
import CubertoButton from "../components/cubertoButton";
import { motion } from "framer-motion";
import StickyCursor from "../components/stickyCursor";
import { useRef } from "react";

export default function Hero() {
  const interactiveElementsRef = useRef<HTMLDivElement>(null);

  return (
    <EnterHero>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black p-4">
        <div ref={interactiveElementsRef} className="w-full max-w-5xl mx-auto text-center">
          <AnimatedText
            text="Franck Chapelon est un freelance designer & webflow developer"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-center relative"
            el="h1"
            animation={{
              hidden: { y: "100%", scale: 0.8 },
              visible: { y: "0%", scale: 1 },
            }}
            delay={1.3} // Augmenté pour commencer après la transition EnterHero
            duration={0.3}
          />

          <motion.div
            className="flex justify-center gap-6 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }} // Augmenté pour commencer après l'animation du texte
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
    </EnterHero>
  );
}