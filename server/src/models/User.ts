import mongoose, { Schema } from "mongoose";

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("User", userSchema);
