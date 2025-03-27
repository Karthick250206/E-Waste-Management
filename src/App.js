// src/App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import CollectionMap from './Components/CollectionMap';
import Marketplace from './Components/Marketplace';
import Education from './Components/Education';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  const [recycledItems, setRecycledItems] = useState([]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const addRecycledItem = (item) => {
    setRecycledItems([...recycledItems, item]);
  };

  const calculateStats = () => {
    const itemsRecycled = recycledItems.length;
    const co2Saved = recycledItems.reduce((total, item) => {
      if (item.name.toLowerCase().includes('phone')) {
        return total + 2;
      } else if (item.name.toLowerCase().includes('laptop')) {
        return total + 5;
      } else {
        return total + 3;
      }
    }, 0);

    const points = recycledItems.reduce((total, item) => {
      if (item.name.toLowerCase().includes('phone')) {
        return total + 8;
      } else if (item.name.toLowerCase().includes('laptop')) {
        return total + 15;
      } else {
        return total + 10;
      }
    }, 0);

    return {
      recycled: itemsRecycled,
      co2Saved: co2Saved,
      points: points
    };
  };

  const stats = calculateStats();

  return (
    <div className="app">
      <Routes>
        {/* Login Route */}
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
          }
        />
        {/* Signup Route */}
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/" /> : <Signup />
          }
        />
        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Dashboard stats={stats} />} />
                  <Route path="/map" element={<CollectionMap />} />
                  <Route path="/marketplace" element={<Marketplace addRecycledItem={addRecycledItem} />} />
                  <Route path="/education" element={<Education />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;