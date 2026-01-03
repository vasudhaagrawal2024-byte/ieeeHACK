import mongoose from "mongoose"

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  college: String,
  phone: String,
  teamName: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("Registration", registrationSchema)
