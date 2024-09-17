import { motion } from "framer-motion";

export default function Digits({ id }: { id: string }) {
  return (
    <div className="relative flex items-center justify-center w-32 h-24 overflow-hidden leading-snug">
      {id.split("").map((digit, index) => (
        <motion.span
          key={`top-${index}`}
          className="font-serif tracking-tighter text-8xl pb-2 absolute leading-snug"
          style={{ left: `${index * 45}%` }} // Ajusté le positionnement horizontal
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          variants={{
            hover: { y: "-100%" },
          }}
        >
          {digit}
        </motion.span>
      ))}
      {id.split("").map((digit, index) => (
        <motion.span
          key={`bottom-${index}`}
          className="font-pinyon-script text-8xl font-bold inline-block absolute"
          style={{ left: `${index * 40}%` }} // Ajusté le positionnement horizontal
          initial={{ y: "200%" }}
          variants={{
            hover: { y: 0 },
          }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          {digit}
        </motion.span>
      ))}
    </div>
  );
}
