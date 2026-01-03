import { Link } from "react-scroll"
import { Home } from "lucide-react"
import { FaSun, FaMoon } from "react-icons/fa"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const scrollProps = {
    smooth: "easeInOutQuart",
    duration: 900,
    offset: -80,
    spy: true,
    activeClass: "text-indigo-400 font-semibold"
  }

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl
        border-b border-white/10
      "
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <h1
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-bold tracking-wide cursor-pointer"
          style={{ color: "var(--text-main)" }}
        >
          ieee<span style={{ color: "var(--accent)" }}>Hack</span>
        </h1>

        {/* NAV ITEMS */}
        <div className="flex items-center gap-4 text-sm">

          {/* HOME ICON — ALWAYS VISIBLE */}
          <Link
            to="home"
            {...scrollProps}
            className="
              flex items-center justify-center
              w-10 h-10
              rounded-xl
              border border-white/10
              transition-all
              hover:-translate-y-[2px]
            "
            style={{ color: "var(--text-muted)" }}
          >
            <Home size={18} />
          </Link>

          {/* DESKTOP-ONLY LINKS */}
          <div className="hidden md:flex items-center gap-6">
            {["overview", "schedule", "prizes", "faqs", "contact"].map(item => (
              <Link
                key={item}
                to={item}
                {...scrollProps}
                className="cursor-pointer transition-all"
                style={{ color: "var(--text-muted)" }}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* 🌗 THEME TOGGLE — ALWAYS VISIBLE */}
          <button
            onClick={toggleTheme}
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-white/10
              hover:bg-white/20
              transition-all
              duration-300
            "
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <FaSun size={16} />
            ) : (
              <FaMoon size={16} />
            )}
          </button>

          {/* REGISTER — ALWAYS VISIBLE */}
          <Link
            to="register"
            {...scrollProps}
            className="
              px-4 py-2
              rounded-full
              font-semibold
              transition-all
              text-sm
            "
            style={{
              backgroundColor: "var(--accent)",
              color: "#fff"
            }}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
