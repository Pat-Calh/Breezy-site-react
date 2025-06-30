// About page component for Breezy's site
import React from 'react';

function About() {
  return (
    <div className="App">
      {/* Main header for the About page */}
      <h1>About Breezy.Coffee</h1>
      {/* Short description of the site */}
      <p>This is a multi-page React site built with Vite!</p>
      {/* Placeholder for more information */}
      <p>You can add more information about yourself, the site, or your projects here.</p>
      {/* Footer with copyright */}
      <footer style={{ marginTop: '2rem' }}>
        <p>© 2025 Breezy. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Export the About component as default
export default About;
