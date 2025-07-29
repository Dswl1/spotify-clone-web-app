import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <Link 
          to="/" 
          className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          🏠 Home
        </Link>
        <Link 
          to="/search" 
          className={`sidebar-item ${location.pathname === '/search' ? 'active' : ''}`}
        >
          🔍 Search
        </Link>
      </div>

      <div className="sidebar-section">
        <div className="library-header">
          <span className="library-title">📚 Your Library</span>
          <button className="control-button">+</button>
        </div>
        
        <div className="create-playlist-section">
          <h3 className="create-playlist-title">Create your first playlist</h3>
          <p className="create-playlist-subtitle">It's easy, we'll help you</p>
          <button className="btn-create-playlist">Create playlist</button>
        </div>

        <div className="create-playlist-section" style={{ marginTop: '16px' }}>
          <h3 className="create-playlist-title">Let's find some podcasts to follow</h3>
          <p className="create-playlist-subtitle">We'll keep you updated on new episodes</p>
          <button className="btn-create-playlist">Browse podcasts</button>
        </div>
      </div>

      <div className="sidebar-section" style={{ marginTop: 'auto', fontSize: '12px', color: 'var(--secondary-text)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
          <a href="#" style={{ fontSize: '12px' }}>Legal</a>
          <a href="#" style={{ fontSize: '12px' }}>Safety & Privacy Center</a>
          <a href="#" style={{ fontSize: '12px' }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: '12px' }}>Cookies</a>
          <a href="#" style={{ fontSize: '12px' }}>About Ads</a>
          <a href="#" style={{ fontSize: '12px' }}>Accessibility</a>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <a href="#" style={{ fontSize: '12px' }}>Notice at Collection</a>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
            <input type="checkbox" defaultChecked />
            Your Privacy Choices
          </label>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <a href="#" style={{ fontSize: '12px' }}>Cookies</a>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <button style={{ 
            background: 'none', 
            border: '1px solid var(--secondary-text)', 
            color: 'var(--text-color)', 
            padding: '4px 12px', 
            borderRadius: '20px', 
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            🌐 English
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
