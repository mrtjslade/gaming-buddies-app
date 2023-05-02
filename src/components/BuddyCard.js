import React from 'react';
import './BuddyCard.css';

const BuddyCard = ({ name, game, price, onHireClick }) => {
  return (
    <div className="buddy-card">
      <h3>{name}</h3>
      <p>Game: {game}</p>
      <p>Price: ${price}</p>
      <button onClick={onHireClick}>Hire Me</button>
    </div>
  );
};

export default BuddyCard;
