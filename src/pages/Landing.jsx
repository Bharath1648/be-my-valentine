import { motion } from "framer-motion"
import "../styles/landing.css"
import heartsBg from "../assets/images/hearts.png"
import heartSketch from "../assets/images/image.png"

export default function Landing({ setPage }) {
  return (
    <div
      className="landing"
      style={{ backgroundImage: `url(${heartsBg})` }}
    >
      <div className="landing-overlay" />

      <motion.img
        src={heartSketch}
        className="floating-heart heart-1"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.img
        src={heartSketch}
        className="floating-heart heart-2"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Love isn’t perfect 💖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          but it’s perfect for us 🌹
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          className="heart-btn"
          onClick={() => setPage("proposal")}
        >
          Open My Heart 💌
        </motion.button>
      </motion.div>
    </div>
  )
}
