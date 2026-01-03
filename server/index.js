import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import registrationRoutes from "./routes/registrationRoutes.js"

dotenv.config()

const app = express()

/* ================= CORS CONFIG ================= */
// Allow Vercel frontend + local dev
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ieee-hack-eight.vercel.app",
      "https://ieee-hack-9v5kj0dt-vasudha-agrawals-projects.vercel.app",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
)

/* ================= MIDDLEWARE ================= */
app.use(express.json())

/* ================= ROUTES ================= */
app.use("/api/register", registrationRoutes)

app.get("/", (req, res) => {
  res.send("Backend running 🚀")
})

/* ================= DATABASE + SERVER ================= */
const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected ✅")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err)
  })
