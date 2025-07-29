import React, { useState } from 'react';

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const browseCategories = [
    {
      id: 1,
      title: 'Podcasts',
      color: '#006450',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      title: 'Made For You',
      color: '#1e3264',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      title: 'Charts',
      color: '#8400e7',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      title: 'New Releases',
      color: '#e13300',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      title: 'Hip-Hop',
      color: '#ba5d07',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      title: 'Pop',
      color: '#ff006e',
      image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 7,
      title: 'Rock',
      color: '#dc148c',
      image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 8,
      title: 'Latin',
      color: '#ff8500',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      <div className="content-section">
        <h1 className="section-title" style={{ marginBottom: '32px' }}>Search</h1>
        
        {!isSearching && (
          <>
            <h2 className="section-title" style={{ fontSize: '20px', marginBottom: '24px' }}>
              Browse all
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', 
              gap: '24px' 
            }}>
              {browseCategories.map((category) => (
                <div 
                  key={category.id} 
                  style={{
                    backgroundColor: category.color,
                    borderRadius: 'var(--border-radius)',
                    padding: '16px',
                    height: '180px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: '24px', 
                    fontWeight: '700',
                    marginBottom: '8px'
                  }}>
                    {category.title}
                  </h3>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    style={{
                      position: 'absolute',
                      bottom: '-10px',
                      right: '-10px',
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      transform: 'rotate(25deg)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.5)'
                    }}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        {isSearching && searchResults.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            marginTop: '100px',
            color: 'var(--secondary-text)'
          }}>
            <h3>Start typing to search for songs, artists, or podcasts</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
