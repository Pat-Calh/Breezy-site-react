// NotFound page component for handling 404 errors
import React from 'react';

function NotFound() {
  return (
    <div className="App">
      {/* 404 header */}
      <h1>404 - Page Not Found</h1>
      {/* User-friendly error message */}
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

// Export the NotFound component as default
export default NotFound;
