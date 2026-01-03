import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Countdown() {
  // 🎯 Hackathon date: Feb 14, 2026
  const targetDate = new Date("2026-02-14T00:00:00")

  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = targetDate - now

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0 }
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-10 text-center">
      <TimeBlock value={timeLeft.days} label="DAYS" />
      <TimeBlock value={timeLeft.hours} label="HOURS" />
      <TimeBlock value={timeLeft.minutes} label="MINUTES" />
    </div>
  )
}

/* ===== TIME BLOCK ===== */
function TimeBlock({ value, label }) {
  const display = String(value).padStart(2, "0")

  return (
    <div className="flex flex-col items-center">
      {/* NUMBER CONTAINER */}
      <div className="relative">
        {/* GHOST TEXT (reserves height perfectly) */}
        <div className="text-3xl md:text-4xl font-bold leading-none opacity-0">
          88
        </div>

        {/* ANIMATED NUMBER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={display}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="
              absolute inset-0
              flex items-center justify-center
              text-3xl md:text-4xl
              font-bold
              leading-none
            "
          >
            {display}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="text-xs text-gray-400 tracking-widest mt-1">
        {label}
      </div>
    </div>
  )
}
