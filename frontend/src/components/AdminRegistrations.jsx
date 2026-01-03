import { useEffect, useState } from "react"

export default function Admin() {
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:5000/api/register")
      .then(res => res.json())
      .then(data => {
        setRegistrations(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading registrations...
      </div>
    )
  }

  return (
    <section className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Admin – Registrations
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10">
          <thead className="bg-gray-900">
            <tr>
              <th className="p-3 border border-white/10">Name</th>
              <th className="p-3 border border-white/10">Email</th>
              <th className="p-3 border border-white/10">College</th>
              <th className="p-3 border border-white/10">Time</th>
            </tr>
          </thead>

          <tbody>
            {registrations.map((r) => (
              <tr key={r._id} className="hover:bg-white/5">
                <td className="p-3 border border-white/10">
                  {r.name}
                </td>
                <td className="p-3 border border-white/10">
                  {r.email}
                </td>
                <td className="p-3 border border-white/10">
                  {r.college}
                </td>
                <td className="p-3 border border-white/10">
                  {new Date(r.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
