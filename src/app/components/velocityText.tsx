import {
    motion,
    useScroll,
    useVelocity,
    useTransform,
    useSpring,
  } from "framer-motion";
  import React, { useRef } from "react";

  interface VelocityTextProps {
    containerClassName?: string;
    children: React.ReactNode;
  }

  export const VelocityText: React.FC<VelocityTextProps> = ({ containerClassName = "", children }) => {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end end"],
    });

    const scrollVelocity = useVelocity(scrollYProgress);

    const skewXRaw = useTransform(
      scrollVelocity,
      [-0.5, 0.5],
      ["45deg", "-45deg"]
    );
    const skewX = useSpring(skewXRaw, { mass: 1, stiffness: 400, damping: 50 });

    const xRaw = useTransform(scrollYProgress, [0, 1], [0, -1000]);
    const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

    return (
      <section
        ref={targetRef}
        className={`bg-transparent text-white ${containerClassName}`}
      >
        <div className="sticky top-0 flex h-full items-center overflow-hidden">
          <motion.div
            style={{ skewX, x }}
            className="origin-bottom-left whitespace-nowrap text-5xl font-black leading-[0.85] md:text-7xl md:leading-[0.85] flex gap-20"
          >
            {children}
          </motion.div>
        </div>
      </section>
    );
  };