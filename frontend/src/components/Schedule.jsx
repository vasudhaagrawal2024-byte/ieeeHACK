import { useState } from "react"

export default function Schedule() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const day1 = [
    {
      time: "09:00 AM",
      title: "Opening Ceremony",
      short: "Welcome & event kickoff",
      details: `
The hackathon begins with a formal welcome by the IEEE Student Branch and organizing committee.
The session covers hackathon objectives, event structure, judging criteria, and code of conduct.
Participants will also be introduced to mentors, judges, and communication platforms.

Reference:
• IEEE Hackathon Guidelines
• Official Discord Server (announced on stage)
      `
    },
    {
      time: "10:30 AM",
      title: "Problem Statements Release",
      short: "Themes & challenges announced",
      details: `
Problem statements are released across multiple tracks including Healthcare, Sustainability,
FinTech, Smart Cities, and Social Impact. Teams may also propose an open innovation idea.

Reference:
• Problem statements inspired by real-world challenges
• Previous IEEE & MLH hackathons
      `
    },
    {
      time: "11:30 AM",
      title: "Team Formation & Ideation",
      short: "Finalize teams and ideas",
      details: `
Participants finalize team members (2–4 members per team), brainstorm solutions, validate
problem statements, and outline technical architecture and feature scope.

Reference:
• Design Thinking Framework
• IEEE Innovation Methodologies
      `
    },
    {
      time: "01:00 PM",
      title: "Hacking Begins",
      short: "Build phase starts",
      details: `
The main development phase begins. Teams start building their projects using tools and
technologies of their choice. Mentors will be available for technical and product guidance.

Reference:
• GitHub for version control
• Open-source APIs and SDKs
      `
    },
    {
      time: "07:00 PM",
      title: "Mentor Review & Checkpoint",
      short: "Mid-hack progress review",
      details: `
Teams present current progress to mentors. Feedback is provided on feasibility,
technical decisions, UI/UX, and overall problem-solution fit.

Reference:
• Mentor feedback sessions
• Industry best practices
      `
    },
    {
      time: "10:00 PM",
      title: "Night Hacking & Networking",
      short: "Overnight build session",
      details: `
Hacking continues overnight. Participants can attend informal networking sessions,
relaxation activities, and peer discussions while continuing development.

Reference:
• Community networking
• Late-night hackathon culture
      `
    }
  ]

  const day2 = [
    {
      time: "08:00 AM",
      title: "Progress Submission",
      short: "Initial build submission",
      details: `
Teams submit an initial progress update including problem statement, current build status,
and planned features. This helps organizers track participation and progress.

Reference:
• Devfolio / GitHub submission guidelines
      `
    },
    {
      time: "10:00 AM",
      title: "Final Development Sprint",
      short: "Polish & finalize projects",
      details: `
Teams focus on completing core functionality, improving UI/UX, fixing bugs,
and preparing their demo and presentation.

Reference:
• UI/UX best practices
• Performance optimization techniques
      `
    },
    {
      time: "02:00 PM",
      title: "Final Submission Deadline",
      short: "Code freeze",
      details: `
Final submissions are made. Teams submit their GitHub repository, pitch deck,
and demo video or live demo link.

Reference:
• GitHub repositories
• Project documentation standards
      `
    },
    {
      time: "03:00 PM",
      title: "Judging & Demos",
      short: "Project evaluation",
      details: `
Teams present their solutions to judges, explaining the problem, solution,
technology stack, innovation, and real-world impact.

Reference:
• IEEE judging rubric
• Innovation & feasibility metrics
      `
    },
    {
      time: "06:00 PM",
      title: "Results & Closing Ceremony",
      short: "Winners announced",
      details: `
Winners are announced based on judging results. Prizes are distributed,
feedback is shared, and the hackathon concludes with closing remarks.

Reference:
• Prize distribution guidelines
• IEEE certification & participation acknowledgments
      `
    }
  ]

  const EventCard = ({ event, index }) => {
    const isOpen = openIndex === index

    return (
      <div
        onClick={() => toggle(index)}
        className="cursor-pointer p-6 border border-white/10 rounded-xl bg-black/40 hover:bg-black/60 transition-all duration-300"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-indigo-400 font-semibold">{event.time}</p>
            <h4 className="text-xl font-semibold mt-1">{event.title}</h4>
            <p className="text-gray-400 mt-2">{event.short}</p>
          </div>

          <span
            className={`text-indigo-400 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {event.details}
          </p>
        </div>
      </div>
    )
  }

  return (
    <section id="schedule" className="min-h-screen px-6 py-32"
  style={{ backgroundColor: "var(--bg-secondary)" }}>
      <h2 className="text-4xl font-bold text-center mb-4">
        Hackathon Schedule
      </h2>
      <p className="text-center text-gray-400 mb-16">
        A detailed 36-hour journey from idea to impact
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">Day 1</h3>
          <div className="space-y-6">
            {day1.map((event, index) => (
              <EventCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-indigo-400">Day 2</h3>
          <div className="space-y-6">
            {day2.map((event, index) => (
              <EventCard
                key={index + day1.length}
                event={event}
                index={index + day1.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
