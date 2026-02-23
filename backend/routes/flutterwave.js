const express = require("express");
const router = express.Router();
const axios = require("axios");

// POST /flutterwave/init
router.post("/init", async (req, res) => {
  const { email, amount } = req.body;
  if (!email || !amount) return res.status(400).json({ message: "Email and amount required" });

  try {
    const response = await axios.post(
      "https://api.flutterwave.com/v3/payments",
      {
        tx_ref: `tx-${Date.now()}`,
        amount,
        currency: "NGN",
        redirect_url: `${process.env.FRONTEND_URL}/payment-success`,
        customer: { email },
      },
      { headers: { Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}` } }
    );
    res.json({ link: response.data.data.link });
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).json({ message: "Payment initialization failed" });
  }
});

module.exports = router;