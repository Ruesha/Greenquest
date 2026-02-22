const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  option: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vote", voteSchema);