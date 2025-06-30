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
      <footer style={{ marginTop: '2rem' }}>
        <p>© 2025 Breezy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
