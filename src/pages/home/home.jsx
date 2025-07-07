// src/pages/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import '../../styles/pages/home.css'; // Import correcto

export default function Home() {
  const { books } = useBooks();
  //const destacados = books.slice(0, 3); // Mostrar solo 5 libros
  //aquellos que sean populares
  const destacados = books.filter((b) => b.popular).slice(0,5);

  return (
    <section className="home">
      <h1 className="home__title">Selección de los mejores libros de filosofía</h1>
      <p className="home__description">
        “La filosofía es el silencioso diálogo del alma consigo misma sobre el ser.” — Platón
      </p>

    {/* 
      <nav className="home__nav">
        <ul>
          <li><Link to="/catalog">Ver Catálogo de Libros</Link></li>
          <li><Link to="/rentals">Mis Alquileres</Link></li>
          <li><Link to="/profile">Mi Perfil</Link></li>
        </ul>
      </nav> 
*/}

      <h2 className="home__subtitle">Obras destacadas para el pensamiento</h2>

      {destacados.length === 0 ? (
        <p>No hay libros disponibles en este momento.</p>
      ) : (
        <div className="home__carousel">
          {destacados.map((book) => (
            <div className="home__book-card" key={book.isbn13}>
              <img src={book.imagenPortada} alt={book.nombre} />
              <h3>{book.nombre}</h3>
              <p>{book.autor}</p>
              <Link to={`/book/${book.isbn13}`}>Ver detalles</Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
