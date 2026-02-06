import { useEffect } from "react"
import confetti from "canvas-confetti"
import coupleImg from "../assets/images/banner.jpg"
import "../styles/accepted.css"

export default function Accepted() {
  useEffect(() => {
    confetti({
      particleCount: 220,
      spread: 150,
      startVelocity: 35,
      gravity: 0.9,
      ticks: 320,
      origin: { y: 0.6 },
      colors: ["#e53935", "#ff5252", "#ffcdd2", "#ffffff"],
    })
  }, [])

  return (
    <div className="accepted">
      <div className="accepted-vignette" />

      <div className="accepted-content">
        <img
          src={coupleImg}
          alt="Romantic couple"
          className="accepted-image"
        />

        <h1>You just made my world brighter 💍❤️</h1>
        <p>Two hearts , One forever. 💕</p>
      </div>
    </div>
  )
}
