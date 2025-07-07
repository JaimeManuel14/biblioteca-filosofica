// src/components/books/SearchFilter/SearchFilter.jsx
import React from 'react';
//import './SearchFilter.css';

export default function SearchFilter({ query, onChange }) {
  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Buscar: título, autor o ISBN"
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="search-filter__input"
      />
    </div>
  );
}
