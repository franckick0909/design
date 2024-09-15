import Link from 'next/link';

const projects = [
  { id: '01', name: 'Projet 1', link: '/projets/projet1' },
  { id: '02', name: 'Projet 2', link: '/projets/projet2' },
  { id: '03', name: 'Projet 3', link: '/projets/projet3' },
  { id: '04', name: 'Projet 4', link: '/projets/projet4' },
  { id: '05', name: 'Projet 5', link: '/projets/projet5' },
];

export default function Projets() {
    return (
        <div id="projets" className="relative flex flex-col items-center justify-center min-h-screen w-full bg-zinc-200 px-4 py-16">
            <h2 className="text-4xl font-bold mb-8">Projets Sélectionnés</h2>
            <div className="w-full">
                {projects.map((project) => (
                    <Link href={project.link} key={project.id} className="group block border-b border-zinc-700 py-8 transition-all hover:pl-4">
                        <div className="flex items-center justify-between max-w-7xl mx-auto">
                            <div className="flex items-center">
                                <div className="flex items-center justify-center">
                                    <span className="text-8xl font-serif text-black">{project.id}</span>
                                </div>

                                <div className="">
                                    <span className="text-6xl font-inter ml-20">{project.name}</span>
                                </div>
                                

                            </div>
                            <span className="text-2xl transform group-hover:translate-x-2 transition-transform">→</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-12">
                <Link href="/projets/tous" className="text-lg font-semibold hover:underline">
                    Voir tous les projets →
                </Link>
            </div>
        </div>
    );
}