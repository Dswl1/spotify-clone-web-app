import React from 'react';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Something went wrong</h1>
      <p className="error-subtitle">Try reloading the page</p>
      <button 
        className="btn-reload" 
        onClick={() => window.location.reload()}
      >
        RELOAD PAGE
      </button>
    </div>
  );
};

export default ErrorPage;
