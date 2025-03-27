// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  // Debug: Log to confirm setIsAuthenticated prop
  console.log('Navbar.js: setIsAuthenticated prop:', setIsAuthenticated);

  const handleLogout = () => {
    console.log('Logging out...');
    // Update localStorage to ensure the app recognizes the user as logged out
    localStorage.setItem('isAuthenticated', 'false');
    
    // Attempt to update state if setIsAuthenticated is a function
    if (typeof setIsAuthenticated === 'function') {
      setIsAuthenticated(false);
      console.log('isAuthenticated set to false via setIsAuthenticated');
    } else {
      console.error('setIsAuthenticated is not a function:', setIsAuthenticated);
    }

    // Redirect to login page
    console.log('Navigating to /login');
    navigate('/login', { replace: true }); // Use replace to avoid adding to history stack
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">E-Waste Management</div>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/map">Collection Centers</Link></li>
          <li><Link to="/marketplace">Recycle & Sell</Link></li>
          <li><Link to="/education">Learn</Link></li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;