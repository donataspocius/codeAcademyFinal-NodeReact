import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  userProfile: String,
  visitedCities: [],
  wishCities: [],
});

const User = mongoose.model("user", userSchema);
export default User;
