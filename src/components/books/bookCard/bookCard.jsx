// src/components/books/BookCard/BookCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './bookCard.css';

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.imagenPortada} alt={book.nombre} className="book-card__image" />
      <h3 className="book-card__title">{book.nombre}</h3>
      <Link to={`/book/${book.isbn13}`} className="book-card__link">
        Ver más
      </Link>
    </div>
  );
}

/*
export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.imagenPortada} alt={book.nombre} className="book-card__image" />
      <div className="book-card__info">
        <h3 className="book-card__title">{book.nombre}</h3>
        <p className="book-card__author">Autor: {book.autor}</p>
        <p className="book-card__year">Publicado: {book.añoPublicacion}</p>
        <Link to={`/book/${book.isbn13}`} className="book-card__link">
          Ver más
        </Link>
      </div>
    </div>
  );
}*/
