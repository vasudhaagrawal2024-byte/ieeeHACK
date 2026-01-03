import { motion } from "framer-motion"
import { Mail, Phone, MessageCircle } from "lucide-react"

export default function Contact() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
    },
  }

  return (
    <section
      id="contact"
      className="
    min-h-screen
    flex items-center justify-center
    px-6
  "
  style={{ backgroundColor: "var(--bg-main)" }}
    >
      {/* ===== Animated Background Aura ===== */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-blue-500/10 to-purple-600/20"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ===== Content ===== */}
      <motion.div
        className="relative z-10 max-w-4xl w-full text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Need Help?
        </motion.h2>

        <motion.p
          variants={item}
          className="text-gray-400 mb-16 max-w-xl mx-auto"
        >
          Have questions or doubts regarding the hackathon? Our team is here to
          help you with registrations, rules, problem statements, and
          submissions.
        </motion.p>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <SupportCard
            title="Email Support"
            value="ieeehack@ieee.org"
            sub="For registration, rules & general queries"
            icon={Mail}
            link ="https://mail.google.com/mail/u/0/#inbox?compose=new"
          
          />

          <SupportCard
            title="Quick Help"
            value="+91 9XXXXXXXXX"
            sub="For urgent doubts during the hackathon"
            icon={Phone}
           
          />

          <SupportCard
            title="Community Support"
            value="Discord Server"
            sub="Ask doubts, get updates & announcements"
            icon={MessageCircle}
            link="https://discord.com/"
           
          />
        </div>

        {/* Footer Note */}
        <motion.p
          variants={item}
          className="text-gray-500 text-sm mt-16"
        >
          Support is available throughout the hackathon duration.
        </motion.p>
      </motion.div>
    </section>
  )
}

/* ===== Support Card ===== */
function SupportCard({ title, value, sub, link, icon: Icon }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -10, scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="
        group
        block p-8 rounded-2xl
        bg-gray-900/80
        border border-white/10
        backdrop-blur
        transition-all duration-300
        hover:border-indigo-500/40
        cursor-pointer
      "
    >
      {/* Icon */}
      <div className="mb-4 flex justify-center">
        <div
          className="
            p-4 rounded-xl
            bg-indigo-500/10
            text-indigo-400
            transition-all duration-300
            group-hover:scale-110
            group-hover:shadow-[0_0_30px_rgba(99,102,241,0.45)]
          "
        >
          <Icon size={28} />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-center">
        {title}
      </h3>

      <p className="text-indigo-400 font-semibold mb-1 text-center">
        {value}
      </p>

      <p className="text-gray-400 text-sm text-center">
        {sub}
      </p>
    </motion.a>
  )
}
