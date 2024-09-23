'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface StickyCursorProps {
  stickyElement: React.RefObject<HTMLElement>;
}

const StickyCursor: React.FC<StickyCursorProps> = ({ stickyElement }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  const scale = useSpring(1, smoothOptions);

  const cursorSize = useTransform(scale, [1, 2], [20, 100]);

  const manageMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const size = cursorSize.get();
    mouse.x.set(clientX - size / 2);
    mouse.y.set(clientY - size / 2);
  }, [mouse.x, mouse.y, cursorSize]);

  const manageMouseOver = useCallback(() => {
    setIsHovered(true);
    scale.set(2);
  }, [scale]);

  const manageMouseLeave = useCallback(() => {
    setIsHovered(false);
    scale.set(1);
  }, [scale]);

  useEffect(() => {
    const element = stickyElement.current;
    if (element) {
      element.addEventListener("mouseenter", manageMouseOver);
      element.addEventListener("mouseleave", manageMouseLeave);
    }
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", manageMouseOver);
        element.removeEventListener("mouseleave", manageMouseLeave);
      }
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [stickyElement, manageMouseMove, manageMouseOver, manageMouseLeave]);

  return (
    <motion.div 
      ref={cursor}
      style={{
        position: 'fixed',
        left: smoothMouse.x,
        top: smoothMouse.y,
        width: cursorSize,
        height: cursorSize,
        borderRadius: '50%',
        backgroundColor: isHovered ? '#ffffff' : '#ffffff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default StickyCursor;
