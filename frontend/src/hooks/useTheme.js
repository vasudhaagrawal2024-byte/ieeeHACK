import { useEffect, useState } from "react"

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  )

  useEffect(() => {
    const root = document.documentElement

    // Remove both first
    root.classList.remove("dark", "light")

    // Add current theme
    root.classList.add(theme)

    // Save preference
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"))
  }

  return { theme, toggleTheme }
}
