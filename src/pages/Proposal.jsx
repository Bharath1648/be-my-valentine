import { motion } from "framer-motion"
import { useState } from "react"
import FloatingHearts from "../components/FloatingHearts"
import confetti from "canvas-confetti"
import coupleImg from "../assets/images/accepted.png"
import "../styles/proposal.css"

export default function Proposal({ setPage }) {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const moveNo = () => {
    const maxX = 140
    const maxY = 80

    setPos({
      x: Math.random() * maxX * 2 - maxX,
      y: Math.random() * maxY * 2 - maxY,
    })
  }

  const miniConfetti = () => {
    confetti({
      particleCount: 18,
      spread: 45,
      startVelocity: 14,
      origin: { y: 0.65 },
      colors: ["#b11226", "#e63946", "#ff758f", "#fff1e6"],
    })
  }

  return (
    <div className="proposal">
      <div className="vignette" />

      <FloatingHearts />

      <div className="proposal-content">
        <motion.img
          src={coupleImg}
          alt="Couple illustration"
          className="proposal-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
         My heart chose you. Will you choose me? 💖
        </motion.h1>

        <div className="proposal-buttons">
          <button
            className="yes-btn"
            onClick={() => setPage("accepted")}
            onMouseEnter={miniConfetti}
          >
            YES 💕
          </button>

          <motion.button
            className="no-btn"
            onMouseEnter={moveNo}
            animate={pos}
            transition={{ type: "spring", stiffness: 420 }}
          >
            NO 😏
          </motion.button>
        </div>
      </div>
    </div>
  )
}
