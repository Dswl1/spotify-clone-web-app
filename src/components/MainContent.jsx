import React, { useState, useEffect } from 'react';

const trendingSongs = [
  {
    id: 1,
    title: 'End Of Summer',
    artist: 'Tame Impala',
    image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    title: 'It Depends (feat. Bryson Tiller)',
    artist: 'Chris Brown, Bryson Tiller',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    title: 'Have A Baby (With Me)',
    artist: 'Daniel Caesar',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    title: 'Ensaio',
    artist: 'Anavitória',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 5,
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 6,
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

const popularArtists = [
  {
    id: 1,
    name: 'Taylor Swift',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    name: 'Drake',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    name: 'Bad Bunny',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    name: 'The Weeknd',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 5,
    name: 'Ariana Grande',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 6,
    name: 'Post Malone',
    type: 'Artist',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

const recentlyPlayed = [
  {
    id: 1,
    title: 'Liked Songs',
    type: 'Playlist',
    image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 2,
    title: 'Discover Weekly',
    type: 'Made for you',
    image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 3,
    title: 'Release Radar',
    type: 'Made for you',
    image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 4,
    title: 'Daily Mix 1',
    type: 'Made for you',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 5,
    title: 'Daily Mix 2',
    type: 'Made for you',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 6,
    title: 'Chill Hits',
    type: 'Playlist',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300',
  }
];

const MainContent = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      // Uncomment to simulate error:
      // setError(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (error) {
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
  }

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh',
        fontSize: '18px',
        color: 'var(--secondary-text)'
      }}>
        Loading...
      </div>
    );
  }

  return (
    <div>
      {/* Recently Played Section */}
      <div className="content-section">
        <div className="section-header">
          <h2 className="section-title">Recently played</h2>
          <a href="#" className="show-all-link">Show all</a>
        </div>
        <div className="grid-container">
          {recentlyPlayed.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-subtitle">{item.type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Songs Section */}
      <div className="content-section">
        <div className="section-header">
          <h2 className="section-title">Trending songs</h2>
          <a href="#" className="show-all-link">Show all</a>
        </div>
        <div className="grid-container">
          {trendingSongs.map((song) => (
            <div key={song.id} className="card">
              <img src={song.image} alt={song.title} className="card-image" />
              <h3 className="card-title">{song.title}</h3>
              <p className="card-subtitle">{song.artist}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Artists Section */}
      <div className="content-section">
        <div className="section-header">
          <h2 className="section-title">Popular artists</h2>
          <a href="#" className="show-all-link">Show all</a>
        </div>
        <div className="grid-container">
          {popularArtists.map((artist) => (
            <div key={artist.id} className="card">
              <img 
                src={artist.image} 
                alt={artist.name} 
                className="card-image" 
                style={{ borderRadius: '50%' }}
              />
              <h3 className="card-title">{artist.name}</h3>
              <p className="card-subtitle">{artist.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
