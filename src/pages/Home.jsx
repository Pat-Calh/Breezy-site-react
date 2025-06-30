// Home page component for Breezy's site
import React from 'react';

function Home() {
  return (
    <>
      <div className="App">
        {/* Main welcome header */}
        <h1>Welcome to Breezy's New Site!</h1>
        {/* Construction message section */}
        <div className="construction-container">
          <span className="construction-emoji" role="img" aria-label="construction">🚧</span>
          <h2 className="construction-text">Site Under Construction</h2>
          <p className="construction-subtext">We're working hard to bring you something awesome! 🛠️</p>
          <div className="construction-bar">
            <div className="construction-bar-fill"></div>
          </div>
        </div>
        {/* Update message */}
        <p>Check back often for updates!</p>
        {/* Twitter follow button with custom styles and hover effect */}
        <a 
          href="https://twitter.com/BreezyFops" 
          className="twitter-link" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow Breezy on Twitter"
          style={{
            display: 'inline-block',
            margin: '1.5rem 0 0.5rem 0',
            padding: '0.6rem 1.2rem',
            background: '#1da1f2',
            color: '#fff',
            borderRadius: '24px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1.1rem',
            transition: 'background 0.2s',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#0d8ddb'}
          onMouseOut={e => e.currentTarget.style.background = '#1da1f2'}
        >
          {/* Bird emoji for Twitter branding */}
          <span style={{ marginRight: '0.5rem', fontSize: '1.2em', verticalAlign: 'middle' }}>🐦</span>
          Follow me on Twitter
        </a>
      </div>
      {/* Footer with copyright at the very bottom */}
      <footer style={{ marginTop: '2rem' }}>
        <p>© 2025 Breezy. All rights reserved.</p>
      </footer>
    </>
  );
}

// Export the Home component as default
export default Home;
