const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const voteRoutes = require("./routes/voteRoutes");
const waitlistRoutes = require("./routes/waitlist");
const productRoutes = require("./routes/products");



const app = express();

app.set("trust proxy", 1);

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/", voteRoutes);
app.use("/api", waitlistRoutes);
app.use("/api/products", productRoutes);
app.use("/images", express.static("public/images"));

mongoose.connect("mongodb+srv://admin:Adewale2005@cluster0.auzpy.mongodb.net/?appName=Cluster0")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error:", err));

app.get("/", (req, res) => {
  res.status(200).send("Backend is running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});