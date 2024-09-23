import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FloatingObject = ({ src, alt, size, initialRotation, floatDuration, rotateDuration }: { src: string, alt: string, size: number, initialRotation: number, floatDuration: number, rotateDuration: number }) => {
  return (
    <motion.div
      className='absolute'
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -20, 0],
        rotateY: [initialRotation, initialRotation + 360],
      }}
      transition={{
        y: {
          repeat: Infinity,
          duration: floatDuration,
          ease: 'easeInOut',
        },
        rotateY: {
          repeat: Infinity,
          duration: rotateDuration,
          ease: 'linear',
        },
      }}
    >
      <Image src={src} alt={alt} width={size} height={size} className='object-contain shadow-2xl' />
    </motion.div>
  );
};

const FloatingObjects = () => {
  return (
    <div className='absolute inset-0 w-full h-full z-0 overflow-hidden hidden md:block'>
      <div className='absolute left-[5%] top-3/4'>
        <FloatingObject
          src="/projets/img1.jpg"
          alt="Objet flottant 1"
          size={100}
          initialRotation={0}
          floatDuration={4}
          rotateDuration={15}
        />
      </div>
      <div className='absolute right-[20%] top-1/3'>
        <FloatingObject
          src="/projets/img2.webp"
          alt="Objet flottant 2"
          size={300}
          initialRotation={120}
          floatDuration={5}
          rotateDuration={20}
        />
      </div>
      <div className='absolute left-[50%] top-[5%] -translate-x-1/2'>
        <FloatingObject
          src="/projets/img3.webp"
          alt="Objet flottant 3"
          size={200}
          initialRotation={240}
          floatDuration={6}
          rotateDuration={25}
        />
      </div>
    </div>
  );
};

export default FloatingObjects;