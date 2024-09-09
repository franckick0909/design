import { motion } from 'framer-motion'
import DropCharacters from './dropCharacters'

const TextDrop = ({ text, delay, className }: { text: string, delay: number, className: string }) => {
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <div>
        <DropCharacters
          delay={delay}
          text={text}
          className={className}
        />
      </div>
    </motion.div>
  )
}

export default TextDrop