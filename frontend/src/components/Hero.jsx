import Countdown from "./Countdown"
import KeyboardBG from "./KeyboardBG"

export default function Hero() {
  return (
    <section
      id="home"
  
        className="min-h-screen px-6 py-32 overflow-hidden"
  style={{ backgroundColor: "var(--bg-secondary)" }}
      
    >
      {/* ================= 3D KEYBOARD BACKGROUND ================= */}
      <KeyboardBG />

      {/* ================= BACKGROUND SHAPES ================= */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.35),transparent_70%)] animate-floatSlow" />
        <div className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_70%)] animate-float" />
        <div className="absolute bottom-[-300px] left-1/3 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_70%)] animate-floatSlow" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          ieee<span className="text-indigo-500">Hack</span> 2026
        </h1>

        {/* DATE */}
        <p className="mt-4 text-indigo-400 font-medium tracking-wide">
          📅 February 14, 2026
        </p>
        <p className="mt-1 text-gray-400 tracking-wide">
          📍 SJT 404 · VIT Vellore
        </p>


        <p className="mt-4 max-w-xl mx-auto text-gray-400">
          A national-level IEEE hackathon focused on innovation,
          creativity, and real-world impact.
        </p>

        <div className="mt-10">
          <Countdown />
        </div>

        <div className="mt-12 flex justify-center gap-6">
          <a
            href="#register"
            className="
              px-8 py-3 rounded-full
              bg-indigo-500 text-white font-semibold
              transition-all duration-300
              hover:-translate-y-1 hover:bg-indigo-600
            "
          >
            Register Now
          </a>

          <a
            href="#overview"
            className="
              px-8 py-3 rounded-full
              border border-white/30 text-white
              transition-all duration-300
              hover:-translate-y-1 hover:border-white/50
            "
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
