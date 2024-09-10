'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const TraitCurve: React.FC = () => {
  const path = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [x, setX] = useState(0.5);
  const reqIdRef = useRef<number | null>(null);
  const timeRef = useRef(Math.PI / 2);

  const setPath = useCallback((value: number) => {
    if (!path.current) return;
    const width = window.innerWidth * 0.7;
    path.current.setAttributeNS(null, "d", `M 0 50 Q ${width * x} ${50 + value} ${width} 50`);
  }, [x]);

  useEffect(() => {
    setPath(progress);
    const handleResize = () => setPath(progress);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [progress, setPath]);

  const animateIn = () => {
    if (reqIdRef.current) {
      cancelAnimationFrame(reqIdRef.current);
      timeRef.current = Math.PI / 2;
    }
    setPath(progress);
    reqIdRef.current = requestAnimationFrame(animateIn);
  };

  const resetAnimation = () => {
    if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
    animateOut();
  };

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const animateOut = () => {
    const newProgress = progress * Math.sin(timeRef.current);
    setPath(newProgress);

    setProgress(prev => lerp(prev, 0, 0.04));
    timeRef.current += 0.2;

    if (Math.abs(progress) > 0.5) {
      reqIdRef.current = requestAnimationFrame(animateOut);
    } else {
      timeRef.current = Math.PI / 2;
      setProgress(0);
    }
  };

  const manageMouseMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const { movementY } = e;
    const box = e.currentTarget.getBoundingClientRect();
    setX((e.clientX - box.left) / box.width);
    setProgress(prev => prev + movementY);
  };

  return (
    <div className="relative w-full h-24">
      <motion.span
        className="absolute top-0 left-0 w-full h-full cursor-pointer"
        onMouseEnter={animateIn}
        onMouseLeave={resetAnimation}
        onMouseMove={manageMouseMove}
      />
      <svg className="w-full h-full">
        <path ref={path} fill="none" stroke="black" strokeWidth="1" />
      </svg>
    </div>
  );
};

export default TraitCurve;
