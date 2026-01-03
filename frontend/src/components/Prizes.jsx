import {
  Trophy,
  Medal,
  Palette,
  Rocket,
  Globe,
  Cpu,
  Gift
} from "lucide-react"

export default function Prizes() {
  const mainPrizes = [
    {
      title: "Winner",
      amount: "₹30,000",
      desc: "Awarded to the team with the most innovative, impactful, and technically sound solution.",
      icon: Trophy
    },
    {
      title: "First Runner-Up",
      amount: "₹15,000",
      desc: "For exceptional problem-solving ability and strong technical execution.",
      icon: Medal
    },
    {
      title: "Second Runner-Up",
      amount: "₹5,000",
      desc: "Recognizing creativity, feasibility, and thoughtful implementation.",
      icon: Medal
    }
  ]

  const trackPrizes = [
    {
      title: "Best UI/UX Design",
      desc: "Awarded for exceptional user experience and interface design.",
      icon: Palette
    },
    {
      title: "Best Beginner Hack",
      desc: "Encouraging first-time hackers with a promising solution.",
      icon: Rocket
    },
    {
      title: "Best Social Impact Solution",
      desc: "Recognizing solutions that address real-world societal challenges.",
      icon: Globe
    },
    {
      title: "Best Use of Technology",
      desc: "For innovative and effective use of modern technologies.",
      icon: Cpu
    }
  ]

  return (
    <section id="prizes" className="min-h-screen px-6 py-32"
  style={{ backgroundColor: "var(--bg-secondary)" }}>
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">
        Prizes & Rewards
      </h2>

      <p className="text-center text-gray-400 mb-16 max-w-xl mx-auto">
        Compete for exciting cash prizes, recognition, and exclusive IEEE rewards.
      </p>

      {/* Main Prizes */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 mb-24">
        {mainPrizes.map((prize, i) => {
          const Icon = prize.icon
          return (
            <div
              key={i}
              className="
                p-8 rounded-2xl text-center
                bg-gradient-to-br from-indigo-500/20 to-black
                border border-white/10
                transition-all duration-300
                hover:-translate-y-3
                hover:border-indigo-500/40
                hover:shadow-[0_20px_50px_rgba(99,102,241,0.15)]
              "
            >
              <Icon className="mx-auto mb-4 text-indigo-400" size={36} />

              <h3 className="text-xl font-semibold mb-2">
                {prize.title}
              </h3>

              <p className="text-4xl font-extrabold text-indigo-400 mb-4">
                {prize.amount}
              </p>

              <p className="text-gray-400 text-sm leading-relaxed">
                {prize.desc}
              </p>
            </div>
          )
        })}
      </div>

      {/* Track Prizes */}
      <div className="max-w-4xl mx-auto mb-24">
        <h3 className="text-2xl font-bold text-center mb-10">
          Track & Special Awards
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          {trackPrizes.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="
                  p-6 rounded-xl bg-gray-900
                  border border-white/10
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-indigo-500/40
                "
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={22} className="text-indigo-400" />
                  <p className="text-lg font-semibold">
                    {item.title}
                  </p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Participation */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="p-8 rounded-2xl bg-gray-900 border border-white/10">
          <Gift className="mx-auto mb-4 text-indigo-400" size={34} />

          <h3 className="text-2xl font-bold mb-4">
            Participation Benefits
          </h3>

          <p className="text-gray-400 leading-relaxed">
            All participants will receive IEEE participation certificates,
            exclusive event swags, mentorship access, and networking
            opportunities with industry professionals.
          </p>
        </div>
      </div>
    </section>
  )
}
