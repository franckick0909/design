"use client";

import { VelocityText } from "@/app/components/velocityText";
import { GiPolarStar, GiDeathStar, GiStarShuriken, GiNorthStarShuriken, GiFlatStar } from "react-icons/gi";

import React from "react";
import { AnimatedText } from "@/app/components/animatedText";


export default function Branding() {
    const textVelocity: (string | JSX.Element)[] = [
        "Unique", 
        <GiPolarStar key="polar-star" className="text-zinc-400 text-[4vw]" />, 
        "Propre", 
        <GiNorthStarShuriken key="north-star" className="text-zinc-400 text-[4vw]" />, 
        "Design", 
        <GiDeathStar key="death-star" className="text-zinc-400 text-[4vw]" />,
        "Marketing",
        <GiStarShuriken key="star-shuriken" className="text-zinc-400 text-[4vw]" />,
        "Vitrine", 
        <GiFlatStar key="flat-star" className="text-zinc-400 text-[4vw]" />,
        "Identité"
    ];

    return (
        <div className="relative bg-black text-white min-h-[200vh] w-full flex flex-col items-center py-20 z-10">
            <AnimatedText
                text="Spécialisé"
                className="text-[10vw] font-pinyon-script font-light"
                el="h2"
                animation={{
                    hidden: { y: "100%", rotateX: 90, scale: 0.8, opacity: 1 },
                    visible: { 
                        y: "0%", 
                        rotateX: 0, 
                        scale: 1, 
                        opacity: 1,
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 100
                        }
                    },
                }}
                delay={0.2}
                duration={1.2}
                once={false}
            />
            <div className="flex items-center gap-14 justify-center">
                <h2 className="text-[8vw] font-pinyon-script font-light">Dans la</h2>
                <div className="h-[0.2px] w-[8vw] bg-zinc-600"></div>
                <h2 className="text-[8vw] font-felipa font-light">Création</h2>
            </div>
            <div className="border-[0.1px] border-zinc-600 w-[72vw] h-48 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
                <VelocityText containerClassName="h-48">
                    {textVelocity.map((item, index) => (
                        <span key={index} className="text-[7vw] font-felipa font-light text-zinc-600 hover:text-white transition-all duration-300">
                            {item}
                        </span>
                    ))}
                </VelocityText>
            </div>

            <AnimatedText 
                text="D&apos;identités de marque"
                className="text-[8vw] font-felipa font-light"
                el="h2"
                animation={{
                    hidden: { y: "100%", rotate: 45, scale: 0.8, opacity: 1 },
                    visible: { 
                        y: "0%", 
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            type: "spring",
                            damping: 20,
                            stiffness: 100
                        }
                    },
                }}
                delay={0.2}
                duration={1.2}
                once={false}
            />
                         

            <div className="flex items-center gap-10 justify-center">
                <div className="h-[0.2px] w-[8vw] bg-zinc-600"></div>
                <p className="text-[8vw] font-luxurious-roman font-light">&</p>
                <div className="h-[0.2px] w-[8vw] bg-zinc-600"></div>
            </div>
            <h2 className="text-[8vw] font-pinyon-script font-light">Sites Web</h2>

            <h2 className="text-[4vw] font-inter font-light">Vous avez la vision,</h2>
            <h2 className="text-[4vw] font-inter font-light">je vous aide à vous démarquer.</h2>


            <div className="min-h-48 max-w-[800px] w-full grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 px-8 mt-8">
                <div className="h-full max-w-[320px] col-span-1">
                    <p>Je découvre ce qui faisait déjà partie de votre entreprise. Je prends en compte vos objectifs, vos passions et tous les petits détails qui vous distinguent des autres, et je</p>
                </div>
                <div className="h-full max-w-[320px] col-span-1">
                    <p>leur donne une voix et une présence que les gens ne peuvent ignorer. Vous savez déjà que ce que vous faites change la donne, mais je peux aider les autres à le</p>
                </div>
                <div className="h-full max-w-[320px] col-span-1">
                    <p>comprendre. Alors, commençons, j&apos;aimerais entendre ce que vous créez et en faire partie.</p>
                </div>
            </div>
        </div>
    );
}