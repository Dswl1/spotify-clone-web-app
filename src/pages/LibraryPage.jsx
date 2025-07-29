import React from 'react';

const LibraryPage = () => {
  return (
    <div>
      <div className="content-section">
        <h1 className="section-title" style={{ marginBottom: '32px' }}>Your Library</h1>
        
        <div style={{ 
          textAlign: 'center', 
          marginTop: '100px',
          color: 'var(--secondary-text)'
        }}>
          <div style={{ 
            fontSize: '48px', 
            marginBottom: '24px',
            color: 'var(--text-color)'
          }}>
            📚
          </div>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: '700',
            marginBottom: '16px',
            color: 'var(--text-color)'
          }}>
            Your Library is empty
          </h2>
          <p style={{ 
            fontSize: '16px',
            marginBottom: '32px',
            maxWidth: '400px',
            margin: '0 auto 32px'
          }}>
            Save songs by tapping the heart icon.
          </p>
          <button className="btn-primary" style={{ 
            padding: '12px 32px',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            Find something to listen to
          </button>
        </div>
      </div>
    </div>
  );
};

export default LibraryPage;
