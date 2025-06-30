// Import React and necessary components from react-router-dom for routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
// Import page components
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Main router component for the app
function AppRouter() {
  return (
    // BrowserRouter provides routing context to the app
    <Router>
      {/* Navigation bar with styled NavLinks for main pages */}
      <nav style={{
        margin: '2.5rem 0 2rem 0',
        textAlign: 'center',
        background: '#eaf6ff',
        border: '2px dashed #2196f3',
        borderRadius: '16px',
        padding: '1.1rem 0.5rem 1.1rem 0.5rem',
        boxShadow: '0 4px 16px rgba(33, 150, 243, 0.08)',
        maxWidth: '420px',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'relative',
        zIndex: 2
      }}>
        {/* NavLink to Home page; "end" ensures exact match for root */}
        <NavLink
          to="/"
          style={({ isActive }) => ({
            marginRight: '1.5rem',
            color: isActive ? '#1976d2' : '#1565c0',
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.13rem',
            transition: 'color 0.2s, background 0.2s',
            padding: '0.32rem 1.1rem',
            borderRadius: '9px',
            background: isActive ? 'rgba(33,150,243,0.13)' : 'rgba(46,196,182,0.07)',
            border: isActive ? '1.5px solid #2ec4b6' : '1.5px solid transparent',
            boxShadow: isActive ? '0 1.5px 8px rgba(33,150,243,0.08)' : 'none',
            cursor: 'pointer',
          })}
          onMouseOver={e => e.currentTarget.style.background = '#c5f2fc'}
          onMouseOut={e => e.currentTarget.style.background = ''}
          end
        >
          Home
        </NavLink>
        {/* NavLink to About page */}
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? '#1976d2' : '#1565c0',
            textDecoration: isActive ? 'underline' : 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.13rem',
            transition: 'color 0.2s, background 0.2s',
            padding: '0.32rem 1.1rem',
            borderRadius: '9px',
            background: isActive ? 'rgba(33,150,243,0.13)' : 'rgba(46,196,182,0.07)',
            border: isActive ? '1.5px solid #2ec4b6' : '1.5px solid transparent',
            boxShadow: isActive ? '0 1.5px 8px rgba(33,150,243,0.08)' : 'none',
            cursor: 'pointer',
          })}
          onMouseOver={e => e.currentTarget.style.background = '#c5f2fc'}
          onMouseOut={e => e.currentTarget.style.background = ''}
        >
          About
        </NavLink>
      </nav>
      {/* Define routes for different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<Home />} />
        {/* About page route */}
        <Route path="/about" element={<About />} />
        {/* Catch-all route for undefined URLs, shows NotFound page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Export the router component as default
export default AppRouter;
