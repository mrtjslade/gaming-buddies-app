import React, { useState } from 'react';
import BuddyCard from './BuddyCard';
import ShoppingCart from './ShoppingCart';
import buddies from './buddies';
import './Marketplace.css';

const Marketplace = () => {
  const [filterGame, setFilterGame] = useState('');
  const [cart, setCart] = useState([]);

  const handleFilterGameChange = (event) => {
    setFilterGame(event.target.value);
  };

  const handleHireClick = (buddy) => {
    setCart([...cart, buddy]);
  };

  const handleRemoveClick = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const filteredBuddies = buddies.filter(
    (buddy) => !filterGame || buddy.game === filterGame
  );

  return (
    <div className="marketplace-container">
      <h1 className="marketplace-title">Marketplace</h1>
      <div className="marketplace-content">
        <div className="marketplace-sidebar">
          <h3>Filter by game:</h3>
          <select
            id="game-filter"
            className="filter-select"
            value={filterGame}
            onChange={handleFilterGameChange}
          >
            <option value="">All</option>
            <option value="Fortnite">Fortnite</option>
            <option value="Minecraft">Minecraft</option>
            <option value="Call of Duty">Call of Duty</option>
            <option value="Overwatch">Overwatch</option>
          </select>
          <ShoppingCart cart={cart} handleRemoveClick={handleRemoveClick} />
        </div>
        <div className="marketplace-main">
          {filteredBuddies.map((buddy) => (
            <BuddyCard
              key={buddy.name}
              name={buddy.name}
              game={buddy.game}
              price={buddy.price}
              onHireClick={() => handleHireClick(buddy)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
