import { useEffect, useRef } from "react"
import music from "../assets/song/Music.mp3"

export default function BackgroundMusic({ page, audioUnlocked }) {
  const audioRef = useRef(null)
  const intervalRef = useRef(null)
  const directionRef = useRef("up")

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !audioUnlocked) return

    const startMusic = () => {
      audio.loop = true
      audio.playbackRate = 0.7
      audio.volume = 0.50
      audio.play().catch(() => {})

      intervalRef.current = setInterval(() => {
        if (directionRef.current === "up") {
          audio.volume += 0.004
          if (audio.volume >= 0.10) {
            audio.volume = 0.10
            directionRef.current = "down"
          }
        } else {
          audio.volume -= 0.004
          if (audio.volume <= 0.10) {
            audio.volume = 0.10
            directionRef.current = "up"
          }
        }
      }, 120)
    }

    const stopMusic = () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
      directionRef.current = "up"

      const fadeOut = setInterval(() => {
        audio.volume -= 0.01
        if (audio.volume <= 0.10) {
          audio.volume = 0.10
          audio.pause()
          audio.currentTime = 0
          clearInterval(fadeOut)
        }
      }, 80)
    }

    if (page === "proposal" || page === "accepted") {
      startMusic()
    } else {
      stopMusic()
    }

    return () => clearInterval(intervalRef.current)
  }, [page, audioUnlocked])

  return <audio ref={audioRef} src={music} />
}
