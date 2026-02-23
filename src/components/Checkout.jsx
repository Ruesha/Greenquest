// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { cart = [], total = 0 } = location.state || {};

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!email) return alert("Please enter your email");

    setLoading(true);
    try {
      const res = await fetch("https://greenquest-mga3.onrender.com/flutterwave/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, amount: total }),
      });

      const data = await res.json();
      if (data.link) {
        window.location.href = data.link;
      } else {
        alert("Payment initialization failed");
      }
    } catch (err) {
      console.error(err);
      alert("Payment error. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Checkout</h1>
      <h3>Cart Summary</h3>
      {cart.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>
          {cart.map(item => (
            <li key={item._id}>
              {item.name} x {item.quantity} = ₦{(item.price * item.quantity).toLocaleString()}
            </li>
          ))}
        </ul>
      )}

      <h3>Total: ₦{total.toLocaleString()}</h3>

      <div style={{ margin: "1rem 0" }}>
        <label>Email for payment:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
          style={{ padding: "0.5rem", width: "100%", marginTop: "0.5rem" }}
        />
      </div>

      <button
        onClick={handleCheckout}
        disabled={loading || cart.length === 0}
        style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", cursor: "pointer" }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;