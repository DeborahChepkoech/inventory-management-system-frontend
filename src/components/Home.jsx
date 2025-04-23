import React from 'react';
import SearchFilter from './SearchFilter'; 
import ItemList from './ItemList'; 
import '../index.css';

function Home({ items, filteredItems, handleCategorySearch }) {
  return (
    <div>
        <h1>Welcome to this Inventory Management system</h1>
      <SearchFilter handleCategorySearch={handleCategorySearch} /> {}
      <ItemList items={filteredItems} /> {}
    </div>
  );
}

export default Home;