import React, { useState } from 'react';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('3:45');
  const [volume, setVolume] = useState(70);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTrack = {
    title: 'Song Title',
    artist: 'Artist Name',
    image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=64'
  };

  return (
    <div className="player">
      <div className="player-left">
        <img 
          src={currentTrack.image} 
          alt={currentTrack.title}
          style={{ 
            width: '56px', 
            height: '56px', 
            borderRadius: '4px',
            objectFit: 'cover'
          }}
        />
        <div className="track-info">
          <div className="track-title">{currentTrack.title}</div>
          <div className="track-artist">{currentTrack.artist}</div>
        </div>
        <button className="control-button" style={{ fontSize: '16px' }}>♡</button>
        <button className="control-button" style={{ fontSize: '16px' }}>⊞</button>
      </div>

      <div className="player-center">
        <div className="player-controls">
          <button className="control-button">🔀</button>
          <button className="control-button">⏮</button>
          <button className="play-button" onClick={togglePlay}>
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button className="control-button">⏭</button>
          <button className="control-button">🔁</button>
        </div>
        
        <div className="progress-container">
          <span className="progress-time">{currentTime}</span>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span className="progress-time">{duration}</span>
        </div>
      </div>

      <div className="player-right">
        <button className="control-button">🎤</button>
        <button className="control-button">📋</button>
        <button className="control-button">🔊</button>
        <div className="volume-container">
          <div className="volume-slider">
            <div 
              className="volume-fill" 
              style={{ width: `${volume}%` }}
            ></div>
          </div>
        </div>
        <button className="control-button">⊞</button>
      </div>
    </div>
  );
};

export default Player;
