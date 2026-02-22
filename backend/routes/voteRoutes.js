const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const Vote = require("../models/Vote");

// 🔹 Middleware to assign voter token if not present
router.use((req, res, next) => {
  if (!req.cookies.voterToken) {
    const token = crypto.randomBytes(16).toString("hex");

    res.cookie("voterToken", token, {
      httpOnly: true,
      sameSite: "lax",   // IMPORTANT FIX
      secure: false      // true only in production (HTTPS)
    });

    req.cookies.voterToken = token;
  }

  next();
});

// 🔹 POST /vote
router.post("/vote", async (req, res) => {
  const token = req.cookies.voterToken;
  const { option } = req.body;

  try {
    const existingVote = await Vote.findOne({ token });

    if (existingVote) {
      return res.status(400).json({
        message: "You have already voted"
      });
    }

    await Vote.create({ token, option });

    return res.status(200).json({
      message: "Vote recorded successfully"
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server error"
    });
  }
});

// 🔹 GET /results
router.get("/results", async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$option", count: { $sum: 1 } } }
    ]);

    return res.status(200).json(results);

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Server error"
    });
  }
});

module.exports = router;