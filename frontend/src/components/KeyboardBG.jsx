import { useEffect } from "react"

const WORD = "ieeeHACK"
const TOTAL_KEYS = 72
const COLUMNS = 12

export default function KeyboardBG() {

 useEffect(() => {
  const textKeys = document.querySelectorAll(".key-letter")

  // ⏱ start after 1 second
  const startTimeout = setTimeout(() => {
    textKeys.forEach((key, index) => {
      setTimeout(() => {
        key.classList.add("key-press")

        setTimeout(() => {
          key.classList.remove("key-press")
        }, 320) // ⬅️ press stays longer

      }, index * 320) // ⬅️ slower stagger
    })
  }, 1000)

  return () => clearTimeout(startTimeout)
}, [])



  const keys = Array.from({ length: TOTAL_KEYS })

  // place ieeeHACK in middle row
  const middleRow = 3
  const startCol = Math.floor((COLUMNS - WORD.length) / 2)
  const startIndex = middleRow * COLUMNS + startCol

  return (
    <div className="keyboard-wrapper">
      <div className="keyboard">
        {keys.map((_, i) => {
          const letterIndex = i - startIndex
          const letter =
            letterIndex >= 0 && letterIndex < WORD.length
              ? WORD[letterIndex]
              : null

          return (
            <div
              key={i}
              className={`key ${letter ? "key-letter" : ""}`}
            >
              {letter && (
                <span className="key-text">
                  {letter}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
