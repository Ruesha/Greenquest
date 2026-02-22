// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const voteRoutes = require("./routes/voteRoutes");
const waitlistRoutes = require("./routes/waitlist");
const productRoutes = require("./routes/products");
require('dotenv').config(); // load .env variables

const app = express();

// Use trust proxy for secure cookies if behind a proxy (Render handles this)
app.set("trust proxy", 1);

// CORS setup
app.use(cors({
  origin: [
    "http://localhost:5173", // local dev
    "http://localhost:5174", // local dev alternative
    process.env.FRONTEND_URL  // deployed frontend
  ],
  credentials: true
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", voteRoutes);
app.use("/api", waitlistRoutes);
app.use("/api/products", productRoutes);

// Serve static images
app.use("/images", express.static("public/images"));

// MongoDB connection

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));
// Basic test route
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// Start server on PORT from .env or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});