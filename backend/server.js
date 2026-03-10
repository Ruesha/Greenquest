// server.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const voteRoutes = require("./routes/voteRoutes");
const waitlistRoutes = require("./routes/waitlist");
const productRoutes = require("./routes/products");
const flutterwaveRoutes = require("./routes/flutterwave");

require("dotenv").config();

const app = express();

// Trust proxy (important for Render)
app.set("trust proxy", 1);

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://greenquestinnovations.org",
  "https://greenquestinnovations.org",
  process.env.FRONTEND_URL
];

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) !== -1) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

// Handle preflight requests
app.options("*", cors());

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/", voteRoutes);
app.use("/api", waitlistRoutes);
app.use("/products", productRoutes);
app.use("/flutterwave", flutterwaveRoutes);

// Serve static images
app.use("/images", express.static("public/images"));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

// Test route
app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});