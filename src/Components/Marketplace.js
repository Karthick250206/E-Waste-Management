import React, { useState } from 'react';

function Marketplace() {
  const [listings, setListings] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setListings([...listings, formData]);
    setFormData({ name: '', description: '', price: '' });
  };

  return (
    <main className="marketplace">
      <h2>List Your Electronics</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input
          type="text"
          placeholder="Item Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price (optional)"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <button type="submit">List Item</button>
      </form>
      <div className="listings">
        {listings.map((item, index) => (
          <div key={index} className="listing-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price ? `$${item.price}` : 'Free'}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Marketplace;