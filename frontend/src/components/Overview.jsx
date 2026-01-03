import {
  Lightbulb,
  Layers,
  Users,
  Rocket
} from "lucide-react"

export default function Overview() {
  return (
    <section
      id="overview"
      className="min-h-screen px-6 py-32"
  style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="perspective-3d">

        {/* 3D BOX */}
        <div
          className="
            box-3d
            relative
            rounded-2xl
            p-10 md:p-12
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-[0_30px_80px_rgba(0,0,0,0.85)]
          "
        >
          {/* subtle inner glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />

          <h2 className="text-4xl font-bold mb-10 ">
            Overview
          </h2>

          {/* Paragraph 1 */}
          <div className="flex gap-4 mb-8">
            <Lightbulb className="mt-1 text-indigo-400 shrink-0" size={22} />
            <p className="text-gray-400 leading-relaxed">
              <b>ieeeHack</b> is a <b>36-hour national-level hackathon</b> where
              passionate students come together to design, build, and deploy
              innovative solutions to real-world problems using technology.
              The event encourages creativity, collaboration, and critical
              thinking, enabling participants to turn ideas into impactful
              products within a limited time frame.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="flex gap-4 mb-8">
            <Layers className="mt-1 text-indigo-400 shrink-0" size={22} />
            <p className="text-gray-400 leading-relaxed">
              Throughout the hackathon, participants work in teams to solve
              problem statements across domains such as healthcare,
              sustainability, education, fintech, smart cities, and social
              good. ieeeHack bridges the gap between theoretical knowledge and
              practical application by encouraging students to apply their
              technical skills to challenges that truly matter.
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="flex gap-4 mb-8">
            <Users className="mt-1 text-indigo-400 shrink-0" size={22} />
            <p className="text-gray-400 leading-relaxed">
              Beyond coding, ieeeHack emphasizes learning, mentorship, and
              innovation. Participants receive guidance from experienced
              mentors, industry professionals, and IEEE members, helping them
              refine ideas, improve technical execution, and understand
              real-world product development workflows.
            </p>
          </div>

          {/* Paragraph 4 */}
          <div className="flex gap-4">
            <Rocket className="mt-1 text-indigo-400 shrink-0" size={22} />
            <p className="text-gray-400 leading-relaxed">
              Whether you are a beginner exploring your first hackathon or an
              experienced developer seeking a challenge, ieeeHack offers a
              collaborative environment to learn, network, and grow. The
              hackathon celebrates curiosity, problem-solving, and teamwork —
              a platform where ideas transform into solutions and students
              evolve into innovators.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
