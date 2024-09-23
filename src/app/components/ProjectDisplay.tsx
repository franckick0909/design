"use client"

import Image from 'next/image';
import Link from 'next/link';
import CubertoButton from './cubertoButton';

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  name: string;
  link: string;
  coverImage: string;
  description: string;
  images: ImageData[];
  subtitle: string;
  stacks: string[];
  clientName: string;
  projectDate: string;
  category: string;
  site: string;
  github: string;
}

const ProjectDisplay = ({ project }: { project: Project }) => {
  return (
    <div className="py-16 overflow-x-hidden">
      {/* Image en pleine largeur */}


      <div className="grid grid-cols-3 place-content-between place-items-baseline gap-4 w-screen">

        <div className="flex flex-col">
      <strong>Technologies utilisées:</strong>
            <ul className="list-disc list-inside grid gap-1">
              {project.stacks.map((tech: string, techIndex: number) => (
                <li key={techIndex}>
                    <p className='text-sm inline-block bg-black text-white rounded-full px-4 py-[2px]'>{tech}</p>
                </li>
              ))}
            </ul>
        </div>

        <div className="flex max-w-sm items-center justify-start">
            <p className="text-lg">{project.description}</p>

        </div>

        <div className="flex flex-col items-start w-full">
          <p className="mt-2"><strong>Client:</strong> {project.clientName}</p>
          <p><strong>Date:</strong> {project.projectDate}</p>
          <p><strong>Catégorie:</strong> {project.category}</p>
        </div>
      </div>

<div className="w-full h-[1px] bg-black my-10"></div>

      <div className="container mx-auto px-4">
        <p className="text-xl mb-4">{project.subtitle}</p>

        <Link href="/projets" className="text-black text-base font-semibold hover:underline">← Retour</Link>
        <div className="flex py-10">
        
          <CubertoButton
              text="Voir le site"
              hoverText="Découvrir"
              href={project.site}
              bg="bg-white"
              className="text-white bg-black hover:text-black"
            />
        </div>


        
        <div className="grid grid-cols-2 gap-12">
          {project.images.map((image: ImageData, index: number) => (
            <div 
              key={index} 
              className={`${index % 4 === 0 || index % 4 === 3 ? 'col-span-2' : 'col-span-1'} ${index % 4 === 1 ? 'row-span-2' : ''}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-cover rounded-lg"
              />
              <p className="text-lg text-start py-2">{image.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
