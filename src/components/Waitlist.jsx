import React, { useState } from "react";
import "../styles/Waitlist.css";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage("");

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://greenquest-mga3.onrender.com/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Thanks for subscribing! 🎉");
      setEmail("");

      // Focus input again
      const input = document.querySelector(".waitform input");
      if (input) input.focus();

      // Clear message after 5 seconds
      setTimeout(() => setMessage(""), 5000);
    } catch (err) {
      setMessage(err.message);
      setTimeout(() => setMessage(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="waitwrapper">
      <div className="waittext">
        <div className="waitheader">Join the Adventure Early</div>
        <div className="waitpara">
          Our brand-new board game is almost here! Subscribe now and get
          notified the moment it’s released — don’t miss out on the fun.
        </div>
      </div>

      <form className="waitform" onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {message && <p className="waitmessage">{message}</p>}
    </div>
  );
};

export default Waitlist;