

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';
import About from './components/About';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/items');
        setItems(response.data);
        setFilteredItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const addItem = async (newItem) => {
    try {
      const response = await axios.post('http://localhost:3000/items', newItem);
      setItems((prevItems) => [...prevItems, response.data]);
      setFilteredItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleCategorySearch = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              filteredItems={filteredItems}
              handleCategorySearch={handleCategorySearch}
            />
          }
        />
        <Route path="/inventory" element={<ItemList items={filteredItems} />} />
        <Route path="/add" element={<AddItemForm addItem={addItem} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
