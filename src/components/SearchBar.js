// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search for a fact..."
      className="search-bar"
    />
  );
};

export default SearchBar;
