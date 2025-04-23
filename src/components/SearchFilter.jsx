import React, { useState } from 'react';

function SearchFilter({ handleCategorySearch }) {
  const categories = [
    'Electronics', 'Furniture', 'Clothing', 'Books', 'Groceries',
    'Stationery', 'Toys', 'Beauty', 'Sports', 'Automotive', 'Home Decor', 'Garden'
  ];

  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearchClick = () => {
    handleCategorySearch(selectedCategory); // Triggers the filtering in parent component
  };

  return (
    <div className="search-filter">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">-- Select Category --</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchFilter;
