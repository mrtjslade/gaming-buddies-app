import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/firebase';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const loggedOut = await logout();
    if (loggedOut) {
      navigate('/'); // Redirect to the home page after successful logout
    } else {
      // Handle logout error if needed
    }
  };

  return (
    <div className="Header">
      <nav className="Header__nav">
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/marketplace" className="Header__button">
                  Marketplace
                </Link>
              </li>
              <li>
                <button className="Header__button logout" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" className="Header__button">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/register" className="Header__button">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="Header__button">
                  Login
                </Link>
              </li>
              
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
