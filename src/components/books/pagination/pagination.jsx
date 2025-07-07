// src/components/books/Pagination/Pagination.jsx
import React from 'react';
//import './Pagination.css';

export default function Pagination({ totalPages, currentPage, onChange }) {
  return (
    <div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`pagination__button ${currentPage === i ? 'active' : ''}`}
          onClick={() => onChange(i)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
