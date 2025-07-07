import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useBooks from '../../hooks/useBooks';
import useRentals from '../../hooks/useRentals';
import '../../styles/pages/bookDetail.css'

import Popupmsg from '../../components/common/pop_up/popup';

export default function BookDetail() {
  const { id } = useParams(); // id es el isbn13
  const { books } = useBooks();
  const { rentBook } = useRentals();
  const navigate = useNavigate();

  const [msg, setMsg] = useState(null);
  // Convertimos todo a string y comparamos
  const book = books.find((b) => String(b.isbn13) === String(id));

  if (!book) return <p>Libro no encontrado.</p>;

  const handleAlquilar = () => {
    rentBook(book);
    //alert('Libro alquilado con éxito');
    //navigate('/rentals');
    setMsg('Libro alquilado con exito');

    setTimeout(()=> {
      navigate('/rentals');
    }, 2000); //redirige despues de mostrar mensaje
  };

  return (
    <section className='book-detail'>

      {msg && <Popupmsg mensaje = {msg} onClose={()=> setMsg(null) } /> }

      <h1 className='book-detail__title'>{book.nombre}</h1>
      <img className='book-detail__image' src={book.imagenPortada} alt={book.nombre} style={{ maxWidth: '200px' }} />

      <div className='book-detail__info'>
        <p><strong>Autor:</strong> {book.autor}</p>
        <p><strong>Año:</strong> {book.añoPublicacion}</p>
        <p><strong>ISBN-10:</strong> {book.isbn10}</p>
        <p><strong>ISBN-13:</strong> {book.isbn13}</p>
        <p><strong>Sinopsis:</strong> {book.sinopsis}</p>
      </div>

      <div className='book-detail__criticas'>
        <h3>Críticas:</h3>
        <ul>
          {book.criticas.map((c, index) => (
            <li key={index}>{c}</li>
          ))}
        </ul>
      </div>

      <button className='book-detail__alquilar' onClick={handleAlquilar}>Alquilar libro</button>
    </section>
  );
}
