import { useState } from "react"
import { User, Mail, GraduationCap, CheckCircle } from "lucide-react"

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.college) {
      alert("Please fill all fields")
      return
    }

    try {
      setLoading(true)

      const res = await fetch(
  "https://ieeehack-backend.onrender.com/api/register",
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  }
)

, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        throw new Error("Failed to submit form")
      }

      setSubmitted(true)
    } catch (error) {
      alert("Something went wrong. Please try again.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="register"
      className="
    min-h-screen
    flex items-center justify-center
    px-6
  "
  style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      {!submitted ? (
        /* ---------- FORM ---------- */
        <form
          onSubmit={submit}
          className="
            bg-gray-900/80 backdrop-blur
            p-8 rounded-2xl w-full max-w-md
            border border-white/10
            shadow-[0_0_60px_rgba(99,102,241,0.15)]
          "
        >
          <h2 className="text-3xl mb-8 font-bold text-center">
            Register Now
          </h2>

          {/* Name */}
          <InputField
            icon={User}
            placeholder="Name"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          {/* Email */}
          <InputField
            icon={Mail}
            placeholder="Email"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          {/* College */}
          <InputField
            icon={GraduationCap}
            placeholder="College"
            onChange={(e) =>
              setForm({ ...form, college: e.target.value })
            }
          />

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 mt-4
              bg-indigo-500 rounded-lg
              font-semibold text-white
              transition-all duration-300
              hover:bg-indigo-600
              hover:-translate-y-1
              hover:shadow-[0_10px_30px_rgba(99,102,241,0.35)]
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        /* ---------- THANK YOU ---------- */
        <div
          className="
            bg-gray-900/80 backdrop-blur
            p-10 rounded-2xl w-full max-w-md
            text-center border border-white/10
            shadow-[0_0_60px_rgba(99,102,241,0.2)]
          "
        >
          <CheckCircle
            size={48}
            className="mx-auto mb-4 text-indigo-500"
          />

          <h2 className="text-3xl font-bold text-indigo-500 mb-4">
            Submitted!
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Thanks for submitting your details!
            <br />
            <span className="text-white font-semibold">
              Our team will contact you shortly.
            </span>
          </p>
        </div>
      )}
    </section>
  )
}

/* ---------- INPUT FIELD COMPONENT ---------- */
function InputField({ icon: Icon, placeholder, onChange }) {
  return (
    <div className="relative mb-4 group">
      <Icon
        size={18}
        className="
          absolute left-3 top-1/2 -translate-y-1/2
          text-gray-400
          group-focus-within:text-indigo-400
          transition
        "
      />

      <input
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full pl-10 pr-3 py-3
          bg-black border border-white/10
          rounded-lg text-white
          focus:outline-none
          focus:ring-2 focus:ring-indigo-500
        "
      />
    </div>
  )
}


