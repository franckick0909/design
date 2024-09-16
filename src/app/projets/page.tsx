"use client";

import Link from "next/link";
import { projects } from "../data/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projets() {

  return (
    <section
      id="projets"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-stone-200 py-16"
    >
      <h2 className="text-4xl font-bold mb-8">Projets Sélectionnés</h2>
      <div className="w-full">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative border-b border-black cursor-pointer overflow-hidden bg-white"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-stone-200"
              variants={{
                hover: { y: "100%" }
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <div className="relative">
              <Link href={project.link}>
                <div className="flex items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto">
                  <div className="relative flex items-center justify-between w-full">
                    <div className="relative inline-flex items-center justify-center w-32 h-24 overflow-hidden">
                      {project.id.split('').map((digit, index) => (
                        <motion.span
                          key={`top-${index}`}
                          className="font-serif tracking-tighter text-8xl font-bold inline-block absolute leading-snug"
                          style={{ left: `${index * 45}%` }}  // Ajusté le positionnement horizontal
                          initial={{ y: "200%" }}
                          animate={{ y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          variants={{
                            hover: { y: "-100%" }
                          }}
                        >
                          {digit}
                        </motion.span>
                      ))}
                      {project.id.split('').map((digit, index) => (
                        <motion.span
                          key={`bottom-${index}`}
                          className="font-pinyon-script text-8xl font-bold inline-block absolute"
                          style={{ left: `${index * 40}%` }}  // Ajusté le positionnement horizontal
                          initial={{ y: "200%" }}
                          variants={{
                            hover: { y: 0 }
                          }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          {digit}
                        </motion.span>
                      ))}
                    </div>

                    <div className="">
                      <span className="text-6xl font-inter ml-20">
                        {project.name}
                      </span>
                    </div>

                    <div className="relative w-96 h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <motion.span
                    className="text-2xl"
                    variants={{
                      hover: { x: 10 }
                    }}
                  >
                    →
                  </motion.span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <Link
          href="/projets/tous"
          className="text-lg font-semibold hover:underline"
        >
          Voir tous les projets →
        </Link>
      </div>
    </section>
  );
}
