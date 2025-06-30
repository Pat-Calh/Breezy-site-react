import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Breezy's New Site!</h1>
      <div className="construction-container">
        <span className="construction-emoji" role="img" aria-label="construction">🚧</span>
        <h2 className="construction-text">Site Under Construction</h2>
        <p className="construction-subtext">We're working hard to bring you something awesome! 🛠️</p>
        <div className="construction-bar">
          <div className="construction-bar-fill"></div>
        </div>
      </div>
      <p>Check back often for updates!</p>
      <a 
        href="https://twitter.com/PatCalhoun" 
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
        <span style={{ marginRight: '0.5rem', fontSize: '1.2em', verticalAlign: 'middle' }}>🐦</span>
        Follow me on Twitter
      </a>
      <footer style={{ marginTop: '2rem' }}>
        <p>© 2025 Breezy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
