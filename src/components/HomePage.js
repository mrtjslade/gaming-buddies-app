import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-content">
        <h1>Welcome to Gaming Buddy Marketplace</h1>
        <p>Find a gaming buddy and pay them to play with you!</p>
        <Link to="/register">
          <button className="HomePage__button HomePage__join-button">Join Now</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;