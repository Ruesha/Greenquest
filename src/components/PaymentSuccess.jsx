// src/pages/PaymentSuccess.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PaymentSuccess.css"; // your green/neon CSS

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse Flutterwave query params
  const params = new URLSearchParams(location.search);
  const status = params.get("status"); // "completed" or other
  const tx_ref = params.get("tx_ref");
  const transaction_id = params.get("transaction_id");

  // Auto-redirect to shop after 5s
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/shop"); // change if your shop route is different
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (status !== "completed") {
    // Show failure message if payment wasn't successful
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#091416",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Orbitron",
          color: "#ff4c4c",
          textAlign: "center",
        }}
      >
        <div>
          <h1>❌ Payment Failed</h1>
          <p>Please try again or contact support.</p>
          <p>Redirecting to shop in 5 seconds...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="success">
      {/* Animated neon green checkmark */}
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip"></span>
          <span className="icon-line line-long"></span>
          <div className="icon-circle"></div>
          <div className="icon-fix"></div>
        </div>
      </div>

      <div className="logo">Payment Successful</div>

      <div className="success-message">
        Thank you! Your payment was completed.
      </div>

      <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.7 }}>
        Transaction Ref: {tx_ref} <br />
        Transaction ID: {transaction_id}
      </div>

      <span className="redirect">Redirecting to shop in 5 seconds...</span>
    </div>
  );
};

export default PaymentSuccess;