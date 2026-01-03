import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import registrationRoutes from "./routes/registrationRoutes.js"

dotenv.config()

const app = express()

// 🔴 MUST BE BEFORE ROUTES
app.use(cors())
app.use(express.json())

app.use("/api/register", registrationRoutes)

app.get("/", (req, res) => {
  res.send("Backend running 🚀")
})

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected ✅")
    app.listen(5000, () => {
      console.log("Server running on port 5000")
    })
  })
  .catch((err) => {
    console.error("MongoDB connection error ❌", err)
  })

