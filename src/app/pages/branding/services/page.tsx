"use client"

import { dataServices } from "@/app/data/data";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="relative min-h-screen w-full flex flex-col items-center justify-center py-16 bg-gradient-to-t from-white to-stone-200 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-8xl mb-8 font-serif text-start"
        >
          Services
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center mb-16"
        >
          <div className="w-16 h-0.5 bg-black mr-4" />
          <h3 className="text-xl">Comment je peux vous aider</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dataServices.map((service, index) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="bg-white px-8 py-12 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h4 className="text-8xl mb-4 font-serif text-end">{service.id}</h4>
              <h5 className="text-2xl font-semibold mb-4">{service.title}</h5>
              <div className="w-8 h-0.5 bg-black mb-4"></div>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cercles animés */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 border-2 border-stone-300 rounded-full z-0"></div>
      <motion.div 
        className="absolute bottom-0 left-1/3 w-96 h-96 border-2 border-stone-300 rounded-full z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.7],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-stone-300 rounded-full z-0"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 1, 0.5],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute top-1/2 left-[15%] w-48 h-48 border-2 border-stone-300 rounded-full z-0"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.6, 1, 0.7],
          x: [0, 30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
