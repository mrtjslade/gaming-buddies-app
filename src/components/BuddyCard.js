import React from 'react';
import './BuddyCard.css';

const BuddyCard = ({ name, game, price, credentials, onHireClick }) => {
  return (
    <div className="buddy-card">
      <div className="buddy-card-row">
        <div className="buddy-card-column">
          <h3>{name}</h3>
          <p className="game">{game}</p>
          <p className="price">${price} a hour</p>
        </div>
        <div className="buddy-card-column">
          <p className="credentials">{credentials}</p>
        </div>
      </div>
      <div className="buddy-card-row">
        <button onClick={onHireClick}>Hire Me</button>
      </div>
    </div>
  );
};

export default BuddyCard;

