// src/components/books/BookList/BookList.jsx
import React from 'react';
import BookCard from '../bookCard/bookCard';
//import './BookList.css';

export default function BookList({ books }) {
  if (!books.length) return <p>No se encontraron libros.</p>;

  return (
    <>
      {books.map((book) => (
        <BookCard key={book.isbn13} book={book} />
      ))}
    </>
  );
}

/*
export default function BookList({ books }) {
  if (!books.length) return <p>No se encontraron libros.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.isbn13} book={book} />
      ))}
    </div>
  );
}
 */