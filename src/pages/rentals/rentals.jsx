// src/pages/Rentals/Rentals.jsx
import React from 'react';
import useRentals from '../../hooks/useRentals';
import RentalCard from '../../components/rentals/rentalCard/rentalCard';

import '../../styles/pages/rentals.css'

export default function Rentals() {
  const { rentals } = useRentals();

  return (
    <section className='rentals'>
      <h1 className='rentals__title'>Mis Libros Alquilados</h1>
      {rentals.length === 0 ? (
        <p className='rentals__empty'>No tienes libros alquilados.</p>
      ) : (
        <div className='rentals__list'>
        {rentals.map((r) => (
          <RentalCard key={r.isbn13} rental={r} />
        ))}
        </div>
      )}
    </section>
  );
}
