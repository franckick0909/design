"use client";

import { dataProjects } from '@/app/data/data';
import ProjectDisplay, { Project } from '@/app/components/ProjectDisplay';
import Image from 'next/image';
import Link from 'next/link';
import PageTransition from '@/app/components/pageTransition';
import PageEnterTransition from '@/app/components/pageEnterTransition';

export default function Projet2() {
  const currentProjectIndex = dataProjects.findIndex(p => p.id === "02");
  const projet = dataProjects[currentProjectIndex] as Project;

  if (!projet) {
    return <div>Projet non trouvé</div>;
  }

  const prevProject = dataProjects[currentProjectIndex - 1] as Project | undefined;
  const nextProject = dataProjects[currentProjectIndex + 1] as Project | undefined;

  return (
    <PageTransition>
      <PageEnterTransition>
        <section className='bg-white min-h-screen w-full'>
          <div className="w-full h-[100vh] mb-8 relative flex">
            <Image
              src={projet.coverImage}
              alt={`${projet.name} cover`}
              width={1980}
              height={500}
              className="object-cover"
              sizes="100vw"
              priority
            />

            <h1 className='text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{projet.name}</h1>
          </div>

          <div className="container mx-auto px-4">
            <ProjectDisplay project={projet} />
            
            <div className="flex items-center justify-between w-full py-10">
              {prevProject && (
                <Link href={prevProject.link} className="text-black text-lg font-semibold hover:underline">
                  ← {prevProject.name}
                </Link>
              )}
              <Link href="/projets" className="text-black">Retour</Link>
              {nextProject && (
                <Link href={nextProject.link} className="text-black text-lg font-semibold hover:underline">
                  {nextProject.name} →
                </Link>
              )}
            </div>
          </div>
        </section>
      </PageEnterTransition>
    </PageTransition>
  );
}

{
  /* 

  <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-96 relative"
              >
                <Image
                  src={arrayImage[currentImageIndex]}
                  alt={`${name} ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center mt-4">
              {arrayImage.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index === currentImageIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
  */
}
