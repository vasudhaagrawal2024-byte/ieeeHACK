export default function FAQs() {
  const faqs = [
    {
      q: "Who can participate in ieeeHack?",
      a: "ieeeHack is open to all undergraduate and postgraduate students from any college or university. Participants from all branches and technical backgrounds are welcome."
    },
    {
      q: "Is there any registration fee?",
      a: "No, participation in ieeeHack is completely free. There is no registration fee or hidden cost involved."
    },
    {
      q: "What is the team size for the hackathon?",
      a: "Teams can consist of 2 to 4 members. Solo participation is not encouraged to promote collaboration and teamwork."
    },
    {
      q: "Do I need prior hackathon experience?",
      a: "Not at all. ieeeHack is beginner-friendly and welcomes first-time hackers. Mentors will be available throughout the event to guide participants."
    },
    {
      q: "What technologies can we use?",
      a: "You are free to use any programming language, framework, or technology stack. Open-source tools and APIs are encouraged."
    },
    {
      q: "How will the projects be judged?",
      a: "Projects will be evaluated based on innovation, technical implementation, problem-solving approach, usability, and real-world impact."
    },
    {
      q: "Will mentors be available during the hackathon?",
      a: "Yes, experienced mentors from academia and industry will be available throughout the hackathon to provide technical and product guidance."
    },
    {
      q: "What should we submit at the end?",
      a: "Teams must submit a GitHub repository link, a short project description, and a demo or presentation explaining their solution."
    }
  ]

  return (
    <section id="faqs" className="min-h-screen px-6 py-32"
  style={{ backgroundColor: "var(--bg-secondary)" }}>
      <h2 className="text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-400 mb-16">
        Everything you need to know about ieeeHack
      </p>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="group border border-white/10 rounded-xl p-6 bg-black/40 transition-all duration-300 hover:bg-black/60"
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">
                {item.q}
              </h3>

              <span className="text-indigo-400 transform transition-transform duration-300 group-hover:rotate-180">
                ▼
              </span>
            </div>

            {/* Answer (Hover Expand) */}
            <div className="overflow-hidden max-h-0 opacity-0 translate-y-2 transition-all duration-500 ease-in-out group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0">
              <p className="text-gray-300 text-sm leading-relaxed mt-4">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
