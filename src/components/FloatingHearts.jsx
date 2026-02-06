import { motion } from "framer-motion"

const hearts = Array.from({ length: 15 })

export default function FloatingHearts() {
  return (
    <>
      {hearts.map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            opacity: 0.6,
          }}
          animate={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}
    </>
  )
}
