import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, min: 2, max: 20, required: true },
  lastName: { type: String, min: 2, max: 20, required: true },
  email: { type: String, max: 255, required: true },
  password: { type: String, min: 8, required: true },
});

export default mongoose.model("User", userSchema);
