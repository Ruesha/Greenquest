import React, { useState, useEffect } from 'react';
import '../styles/VoteBattleCards.css';
import plastic from '../assets/plastic.jpg';
import flood from '../assets/flood.jpg';
import ewaste from '../assets/ewaste.jpg';

const battles = [
  { id: 'plastic', title: 'PLASTIC BATTLE', imageUrl: plastic, alt: 'River full of plastic bottles and waste' },
  { id: 'flood', title: 'FLOOD COMBAT', imageUrl: flood, alt: 'Person in flooded street' },
  { id: 'ewaste', title: 'E-WASTE COMBAT', imageUrl: ewaste, alt: 'Pile of electronic waste and discarded devices' },
];

function VoteBattleCards() {
  const [votes, setVotes] = useState({ plastic: 0, flood: 0, ewaste: 0 });
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const res = await fetch("https://greenquest-mga3.onrender.com/results", {
          credentials: "include"
        });

        const data = await res.json();

        const formatted = { plastic: 0, flood: 0, ewaste: 0 };

        data.forEach(item => {
          formatted[item._id] = item.count;
        });

        setVotes(formatted);

      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchVotes();
  }, []);

  const totalVotes = Object.values(votes).reduce((sum, v) => sum + v, 0);

  const handleVote = async (id) => {
    try {
      const res = await fetch("https://greenquest-mga3.onrender.com/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ option: id })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        setHasVoted(true);
        return;
      }

      setHasVoted(true);

      // Refresh results
      const resultsRes = await fetch("https://greenquest-mga3.onrender.com/results", {
        credentials: "include"
      });

      const resultsData = await resultsRes.json();

      const formatted = { plastic: 0, flood: 0, ewaste: 0 };

      resultsData.forEach(item => {
        formatted[item._id] = item.count;
      });

      setVotes(formatted);

    } catch (err) {
      console.error("Vote error:", err);
    }
  };

  return (
    <div className="vote-battle-container">
      <header className="headerr">
        <h1>SUPPORT AN ADVOCACY PROGRAM</h1>
        <p className="subtitle">YOUR VOTE HELPS REAL LIFE CLIMATE ACTION</p>
      </header>

      <div className="cards-wrapper">
        {battles.map((battle) => {
          const voteCount = votes[battle.id];
          const percentage = totalVotes
            ? (voteCount / totalVotes) * 100
            : 0;

          return (
            <div key={battle.id} className="battle-card">
              <div className="card-image-wrapper">
                <img src={battle.imageUrl} alt={battle.alt} loading="lazy" />
              </div>

              <div className="card-content">
                <h2>{battle.title}</h2>

                <button
                  className="vote-button"
                  onClick={() => handleVote(battle.id)}
                  disabled={hasVoted}
                >
                  {hasVoted ? "VOTED" : "VOTE"}
                </button>

                <div className="vote-bar-wrapper">
                  <div
                    className="vote-bar"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="vote-count">
                  {voteCount} votes
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="total-votes">
        TOTAL VOTES THIS YEAR: <strong>{totalVotes.toLocaleString()}</strong>
      </footer>
    </div>
  );
}

export default VoteBattleCards;