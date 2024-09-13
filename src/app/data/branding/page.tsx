"use client";

import { VelocityText } from "@/app/components/velocityText";
import { GiPolarStar, GiDeathStar, GiStarShuriken, GiNorthStarShuriken, GiFlatStar } from "react-icons/gi";

import React from "react";

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
            <h1 className="text-[10vw] font-pinyon-script font-light">Spécialisé</h1>
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

            <h2 className="text-[8vw] font-felipa font-light">D&apos;identités de marque</h2>
            <div className="flex items-center gap-10 justify-center">
                <div className="h-[0.2px] w-[8vw] bg-zinc-600"></div>
                <h2 className="text-[8vw] font-luxurious-roman font-light">&</h2>
                <div className="h-[0.2px] w-[8vw] bg-zinc-600"></div>
            </div>
            <h2 className="text-[8vw] font-pinyon-script font-light">Sites Web</h2>
        </div>
    );
}