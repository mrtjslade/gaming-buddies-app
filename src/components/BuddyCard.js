import React from 'react';
import './BuddyCard.css';

function BuddyCard({ name, game, price }) {
  return (
    <div className="buddy-card">
      <h3>{name}</h3>
      <p>Game: {game}</p>
  <p>Price per hour: ${price}</p>
  <button>Hire {name}</button>
</div>
);
}

export default BuddyCard;
