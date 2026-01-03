import express from "express"
import Registration from "../models/Registration.js"

const router = express.Router()

// 🔹 POST: Add new registration
router.post("/", async (req, res) => {
  try {
    const { name, email, college } = req.body

    // Basic validation (extra safety)
    if (!name || !email || !college) {
      return res.status(400).json({
        error: "All fields are required",
      })
    }

    const registration = new Registration({
      name,
      email,
      college,
    })

    await registration.save()

    return res.status(201).json({
      message: "Registered successfully",
    })
  } catch (error) {
    console.error("❌ Registration save error:", error)

    return res.status(500).json({
      error: "Server error. Please try again later.",
    })
  }
})

// 🔹 GET: View all registrations (Admin)
router.get("/", async (req, res) => {
  try {
    const registrations = await Registration.find().sort({
      createdAt: -1,
    })

    return res.json(registrations)
  } catch (error) {
    console.error("❌ Fetch registrations error:", error)

    return res.status(500).json({
      error: "Failed to fetch registrations",
    })
  }
})

export default router
