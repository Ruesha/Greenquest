import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Checkout.css";

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
    <div className="checkout-container">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <h3>Cart Summary</h3>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-list">
            {cart.map(item => (
              <li key={item._id} className="cart-item">
                <span>{item.name} x {item.quantity}</span>
                <span>₦{(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="total">
          Total: ₦{total.toLocaleString()}
        </div>

        <div className="checkout-input-group">
          <label>Email for payment</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading || cart.length === 0}
          className="checkout-btn"
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>

      </div>
    </div>
  );
};

export default Checkout;