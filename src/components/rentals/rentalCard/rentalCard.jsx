// src/components/rentals/RentalCard/RentalCard.jsx
import React from 'react';
import ExtensionForm from '../extensionForm/extensionForm';

import './rentalCard.css'

export default function RentalCard({ rental }) {
  const fecha = new Date(rental.fechaAlquiler);
  const fechaFin = new Date(fecha);
  fechaFin.setDate(fecha.getDate() + rental.plazoDias);

  return (
    <div className="rental-card">
      <h3 className="rental-card__title">{rental.nombre}</h3>
      <p className="rental-card__author"><strong>Autor:</strong> {rental.autor}</p>
      <p className="rental-card__date"><strong>Alquilado el:</strong> {fecha.toLocaleDateString()}</p>
      <p className="rental-card__plazo"><strong>Plazo:</strong> {rental.plazoDias} días</p>
      <p className="rental-card__fecha-fin"><strong>Fecha fin:</strong> {fechaFin.toLocaleDateString()}</p>

      <div className="rental-card__extension">
        <ExtensionForm isbn13={rental.isbn13} />
      </div>
    </div>
  );
}
