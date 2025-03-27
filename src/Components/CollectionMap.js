import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function CollectionMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Initialize the map only if it hasn't been initialized yet
    if (!mapRef.current) {
      const map = L.map('map').setView([37.7749, -122.4194], 12); // Center on San Francisco
      mapRef.current = map;

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      // Sample collection centers
      const centers = [
        { lat: 37.7749, lng: -122.4194, title: 'Center 1' },
        { lat: 37.7859, lng: -122.4364, title: 'Center 2' },
        { lat: 37.7659, lng: -122.4064, title: 'Center 3' },
      ];

      // Add markers for collection centers
      centers.forEach(center => {
        L.marker([center.lat, center.lng])
          .addTo(map)
          .bindPopup(`<b>${center.title}</b><br>E-Waste Collection Center`);
      });
    }

    // Cleanup on unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <main className="map-section">
      <h2>Find Collection Centers</h2>
      <div id="map" style={{ height: '500px', width: '100%' }}></div>
    </main>
  );
}

export default CollectionMap;