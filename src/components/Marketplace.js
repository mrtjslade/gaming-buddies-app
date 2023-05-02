import React, { useState } from 'react';
import BuddyCard from './BuddyCard';
import './Marketplace.css';

function Marketplace() {
  const [selectedGame, setSelectedGame] = useState('');

  const handleGameChange = (e) => {
    setSelectedGame(e.target.value);
  };

  return (
    <div>
      <h2>Marketplace</h2>
      <div className="filter-container">
        <label>
          Filter by game:
          <select value={selectedGame} onChange={handleGameChange}>
            <option value="">All games</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Minecraft">Minecraft</option>
            <option value="Call of Duty">Call of Duty</option>
          </select>
        </label>
      </div>
      <div className="buddy-list">
        <BuddyCard name="John" game="Fortnite" price="10" />
        <BuddyCard name="Sarah" game="Minecraft" price="15" />
        <BuddyCard name="Mike" game="Call of Duty" price="12" />
      </div>
    </div>
  );
}

export default Marketplace;
