// src/pages/BookDetail/BookDetail.jsx, puede ser para separar responsabilidades
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import useRentals from '../../hooks/useRentals';


export default function BookDetail() {
  const { id } = useParams(); // isbn13
  const { books } = useBooks();
  const { rentBook } = useRentals();
  const navigate = useNavigate();

  const book = books.find((b) => b.isbn13 === id);

  if (!book) return <p>Libro no encontrado.</p>;

  const handleAlquilar = () => {
    rentBook(book);
    alert('Libro alquilado con éxito');
    navigate('/rentals');

  };

  return (
    <section>
      <h1>{book.nombre}</h1>
      <img src={book.imagenPortada} alt={book.nombre} style={{ maxWidth: '200px' }} />
      <p><strong>Autor:</strong> {book.autor}</p>
      <p><strong>Año:</strong> {book.añoPublicacion}</p>
      <p><strong>ISBN-10:</strong> {book.isbn10}</p>
      <p><strong>ISBN-13:</strong> {book.isbn13}</p>
      <p><strong>Sinopsis:</strong> {book.sinopsis}</p>

      <h3>Críticas:</h3>
      <ul>
        {book.criticas.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>

      <button onClick={handleAlquilar}>Alquilar libro</button>
    </section>
  );
}
