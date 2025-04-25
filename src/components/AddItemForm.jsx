import React, { useState } from 'react';
import '../index.css';

function AddItemForm({ addItem }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: ''
  });

 
  const categories = [
    'Electronics',
    'Furniture',
    'Clothing',
    'Books',
    'Groceries',
    'Stationery',
    'Toys',
    'Beauty',
    'Sports',
    'Automotive',
    'Home Decor',
    'Garden'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, category, quantity } = formData;

    if (name && category && quantity) {
      const newItem = {
        name,
        category,
        quantity: parseInt(quantity, 10)
      };

      addItem(newItem); // Call the addItem function from props
      setFormData({ name: '', category: '', quantity: '' }); // Reset form
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="add-item-container">
      <h2>Add New Inventory Item</h2>
      <form className="add-item-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item name"
          value={formData.name}
          onChange={handleChange}
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemForm;
