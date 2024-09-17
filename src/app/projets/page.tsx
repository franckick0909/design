"use client";

import Link from "next/link";
import { projects } from "../data/data";
import Image from "next/image";
import Digits from "../components/digits";
import { useMotionValue, motion, useSpring, MotionValue } from "framer-motion";
import React, { useRef, useState } from "react";

export default function Projets() {

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      x.set(mouseX / rect.width - 0.5);
      y.set(mouseY / rect.height - 0.5);
    }
  };

  return (
    <section
      id="projets"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-stone-200 py-16"
    >
      <h2 className="text-4xl font-bold mb-8">Projets Sélectionnés</h2>
      <div className="w-full z-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="group relative border-b border-black cursor-pointer overflow-hidden bg-white"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0 bg-stone-200"
              variants={{
                hover: { y: "100%" },
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <div className="relative">
              <Link href={project.link}>
                <div className="flex items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mx-auto w-full">
                  <div className="relative flex items-center justify-between w-full">
                    <div className="leading-snug py-2 h-full flex items-center justify-start group-hover:translate-x-12 transition-transform duration-500">
                      <Digits id={project.id} />
                      <div className="">
                        <h3 className="text-3xl font-inter ml-20">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <ImageProjets
                      image={project.image}
                      name={project.name}
                      isHovered={hoveredProject === project.id}
                      mouseX={mouseXSpring}
                      mouseY={mouseYSpring}
                    />

                  </div>
                  <span className="text-5xl group-hover:-translate-x-6 transition-transform duration-500">→</span>
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

const ImageProjets = ({image, name, isHovered, mouseX, mouseY}: {
  image: string, 
  name: string, 
  isHovered: boolean,
  mouseX: MotionValue<number>,
  mouseY: MotionValue<number>
}) => {
  return (
    <motion.div 
      className="absolute right-0 top-0 w-[24vw] h-[18vh] rounded-full overflow-hidden z-50"
      initial={{ scale: 0, x: 50, opacity: 0 }}
      animate={{ scale: isHovered ? 1 : 0, x: isHovered ? 0 : 50, opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute w-[24vw] h-[18vh] rounded-full overflow-hidden"
        style={{
          top: "50%",
          left: "50%",
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image 
          src={image} 
          alt={name} 
          fill 
          className="object-cover" 
        />
      </motion.div>
    </motion.div>
  );
};