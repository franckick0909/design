"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import Image from 'next/image';  // Commenté car non utilisé

declare global {
  interface Window {
    Image: {
      new (): HTMLImageElement;
    }
  }
}

export default function Loading({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const imagesToPreload = [
      '/projets/img1.jpg',
      '/projets/img2.webp',
      '/projets/img3.webp',
      '/projets/img4.webp',
      '/projets/img5.webp',
      // Ajoutez d'autres images ici
    ];

    let loadedImages = 0;
    const totalImages = imagesToPreload.length;
    const minLoadTime = 2000; // 2 secondes minimum
    const startTime = Date.now();

    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
          loadedImages++;
          resolve();
        };
        img.onerror = reject;
      });
    };

    const updateLoadingPercentage = () => {
      const elapsedTime = Date.now() - startTime;
      const realPercentage = Math.round((loadedImages / totalImages) * 100);
      const timePercentage = Math.min(Math.round((elapsedTime / minLoadTime) * 100), 100);
      const targetPercentage = Math.max(realPercentage, timePercentage);

      setLoadingPercentage(prevPercentage => {
        if (prevPercentage >= targetPercentage) return prevPercentage;
        return prevPercentage + 1;
      });
    };

    const loadingInterval = setInterval(updateLoadingPercentage, 20);

    Promise.all(imagesToPreload.map(preloadImage))
      .then(() => {
        return new Promise(resolve => {
          const remainingTime = Math.max(0, minLoadTime - (Date.now() - startTime));
          setTimeout(resolve, remainingTime);
        });
      })
      .then(() => {
        clearInterval(loadingInterval);
        setLoadingPercentage(100);
        setTimeout(() => {
          setIsLoading(false);
          onLoadingComplete();
        }, 500);
      })
      .catch(console.error);

    return () => clearInterval(loadingInterval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loadingScreen"
          className="fixed inset-0 flex flex-col justify-between bg-black text-white z-[2000] p-8"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-2xl font-medium uppercase font-inter ">
            <div className="">Franck Chapelon</div>
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-20 bg-white" />
              <div>Portfolio &copy; 2024</div>
            </div>
          </div>
          <div className="text-8xl font-bold self-end">
            <span>{loadingPercentage}</span>
            <span>%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
