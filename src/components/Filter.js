import React from 'react';
import './Filter.css';

const Filter = ({ filterGame, onChange }) => {
  const handleFilterGameChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="filter-container">
      <h3 className="filter-title">Filter by game:</h3>
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
    </div>
  );
};

export default Filter;

