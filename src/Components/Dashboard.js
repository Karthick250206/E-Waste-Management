import React, { useState } from 'react';

function Dashboard() {
  const [stats] = useState({
    recycled: 15,
    co2Saved: 45,
    points: 250
  });

  return (
    <main className="dashboard">
      <h2>Your E-Waste Impact</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Items Recycled</h3>
          <p>{stats.recycled}</p>
        </div>
        <div className="stat-card">
          <h3>CO2 Saved</h3>
          <p>{stats.co2Saved} kg</p>
        </div>
        <div className="stat-card">
          <h3>Reward Points</h3>
          <p>{stats.points}</p>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;