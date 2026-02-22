const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// --------------------
// Mongoose Schema
// --------------------
const WaitlistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now }
});

const Waitlist = mongoose.model("Waitlist", WaitlistSchema);

// --------------------
// POST /subscribe
// --------------------
router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Simple regex check for email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  try {
    // Check if email already exists
    const existing = await Waitlist.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    // Save new email
    const newEntry = await Waitlist.create({ email });
    return res.status(201).json({ message: "Subscribed successfully", email: newEntry.email });
  } catch (err) {
    console.error("Waitlist error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

// --------------------
// GET /waitlist (optional, admin dashboard)
// --------------------
router.get("/waitlist", async (req, res) => {
  try {
    const emails = await Waitlist.find().sort({ subscribedAt: -1 });
    return res.json(emails);
  } catch (err) {
    console.error("Waitlist fetch error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;