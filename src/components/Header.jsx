import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      return;
    }
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          Spotify
        </Link>
        <div className="nav-buttons">
          <Link 
            to="/" 
            className={`nav-button ${location.pathname === '/' ? 'active' : ''}`}
          >
            🏠
          </Link>
          <Link 
            to="/search" 
            className={`nav-button ${location.pathname === '/search' ? 'active' : ''}`}
          >
            🔍
          </Link>
        </div>
      </div>

      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="What do you want to listen to?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className="header-right">
        <div className="header-links">
          <a href="#" className="header-link">Premium</a>
          <a href="#" className="header-link">Support</a>
          <a href="#" className="header-link">Download</a>
          <span className="header-link">|</span>
          <a href="#" className="header-link">📱 Install App</a>
        </div>
        <div className="auth-buttons">
          <button className="btn-secondary">Sign up</button>
          <button className="btn-primary">Log in</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
