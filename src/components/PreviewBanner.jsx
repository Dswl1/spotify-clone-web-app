import React from 'react';

const PreviewBanner = () => {
  return (
    <div className="preview-banner">
      <div className="preview-text">
        <strong>Preview of Spotify</strong>
        <br />
        Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
      </div>
      <button className="btn-signup-free">
        Sign up free
      </button>
    </div>
  );
};

export default PreviewBanner;
