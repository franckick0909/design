"use client"

import HeroTransition from '../components/heroTransition';
import AnimatedText from '../components/animatedText';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <HeroTransition>
      <div className="min-h-screen w-full flex items-center justify-center bg-white text-black p-4">
        <div className="w-full flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <AnimatedText 
            text="Franck Chapelon"
            className="font-berkshire-swash"
            delay={2.5}
            duration={0.5}
          />
          <AnimatedText 
            text="Freelance Designer &"
            className="font-pinyon-script"
            delay={2.7}
            duration={0.5}
          />

          <AnimatedText 
            text="Développeur Nextjs"
            className="font-berkshire-swash leading-[0.8]"
            delay={2.9}
            duration={0.5}
          />
        
          <motion.div 
            className="flex justify-center gap-4 mt-8 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="#work" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:border-black border hover:text-black transition-colors">Voir mon travail</a>
            <a href="#contact" className="border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black hover:text-white transition-colors">Me contacter</a>
          </motion.div>
        </div>
      </div>
    </HeroTransition>
  );
}