// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';

export default function Home() {
  const { books } = useBooks();
  const destacados = books.slice(0, 5); // Mostrar solo 2 libros como ejemplo

  return (
    <section>
      <h1>Bienvenido a la Biblioteca Online</h1>
      <p>Explora nuestro catálogo, alquila libros y gestiona tus préstamos fácilmente.</p>

      <nav>
        <ul>
          <li><Link to="/catalog">Ver Catálogo de Libros</Link></li>
          <li><Link to="/rentals">Mis Alquileres</Link></li>
          <li><Link to="/profile">Mi Perfil</Link></li>
        </ul>
      </nav>

      <h2>Libros destacados</h2>
      {destacados.length === 0 ? (
        <p>No hay libros disponibles en este momento.</p>
      ) : (
        <div style={{ display: 'flex', gap: '1rem' }}>
          {destacados.map((book) => (
            <div key={book.isbn13} style={{ border: '1px solid #ccc', padding: '1rem' }}>
              <h3>{book.nombre}</h3>
              <p>{book.autor}</p>
              <img src={book.imagenPortada} alt={book.nombre} style={{ width: '100px' }} />
              <p><Link to={`/book/${book.isbn13}`}>Ver detalles</Link></p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
