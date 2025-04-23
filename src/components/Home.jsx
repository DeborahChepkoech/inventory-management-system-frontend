import React from 'react';
import SearchFilter from './SearchFilter'; // Path remains the same as it's in the same folder
import ItemList from './ItemList'; // Path remains the same as it's in the same folder
import '../index.css';

function Home({ items, filteredItems, handleCategorySearch }) {
  return (
    <div>
        <h1>Welcome to this Inventory Management system</h1>
      <SearchFilter handleCategorySearch={handleCategorySearch} /> {/* Pass handleCategorySearch */}
      <ItemList items={filteredItems} /> {/* Pass filteredItems */}
    </div>
  );
}

export default Home;