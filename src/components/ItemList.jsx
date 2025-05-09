import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css'; 

function ItemList({ items: initialItems }) {
  const [items, setItems] = useState(initialItems || []);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems]);

  
  const deleteItem = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await axios.delete(`http://localhost:3000/items/${id}`); 
        setItems((prevItems) => prevItems.filter((item) => item.id !== id)); 
        alert('Item deleted successfully!');
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete the item. Please try again.');
      }
    }
  };

  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditItem({
      ...editItem,
      [name]: value,
    });
  };

 
  const saveEdits = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/items/${editItem.id}`, editItem); // Ensure backend endpoint is correct
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editItem.id ? response.data : item
        )
      );
      setEditItem(null); 
      alert('Item updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update the item. Please try again.');
    }
  };

  return (
    <div className="inventory-list">
      <h2>Inventory List</h2>

      {items.length > 0 ? (
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => setEditItem(item)}>Edit</button> {}
                  <button onClick={() => deleteItem(item.id)}>Delete</button> {}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items available.</p>
      )}

      {}
      {editItem && (
        <div className="edit-item-form">
          <h3>Edit Item</h3>
          <input
            type="text"
            name="name"
            value={editItem.name}
            onChange={handleEditChange}
            placeholder="Item Name"
          />
          <input
            type="text"
            name="category"
            value={editItem.category}
            onChange={handleEditChange}
            placeholder="Category"
          />
          <input
            type="number"
            name="quantity"
            value={editItem.quantity}
            onChange={handleEditChange}
            placeholder="Quantity"
          />
          <button onClick={saveEdits}>Save Changes</button>
          <button onClick={() => setEditItem(null)}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ItemList;