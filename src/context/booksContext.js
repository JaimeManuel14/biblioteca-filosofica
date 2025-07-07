// src/context/BooksContext.js
import React, { createContext, useState, useEffect } from 'react';
import mockBooks from '../data/mockData';

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(mockBooks);
  }, []);

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      {children}
    </BooksContext.Provider>
  );
};
