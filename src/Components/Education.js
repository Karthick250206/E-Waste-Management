// src/components/Education.js
import React from 'react';

function Education() {
  const resources = [
    { 
      title: 'Why E-Waste Matters', 
      type: 'Blog', 
      link: 'https://www.google.com/search?q=why+e-waste+matters' // Updated link
    },
    { 
      title: 'Recycling 101', 
      type: 'Video', 
      link: 'https://www.google.com/search?q=recycling' // Already set
    }
  ];

  return (
    <main className="education">
      <h2>Educational Hub</h2>
      <div className="resources">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.type}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Education;