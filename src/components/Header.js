import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <nav className="Header__nav">
        <ul>
          <li>
            <Link to="/" className="Header__button">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className="Header__button">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="Header__button">
              Register
            </Link>
          </li>
          <li>
            <Link to="/marketplace" className="Header__button">
              Marketplace
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
