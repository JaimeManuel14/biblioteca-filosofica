// src/pages/Profile/Profile.jsx
import React from 'react';
import useRentals from '../../hooks/useRentals';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

import '../../styles/pages/profile.css';

export default function Profile() {
  const { currentUser } = useContext(UserContext);
  const { rentals } = useRentals();

  return (
    <section className="profile">
      <h1 className="profile__title">Perfil del Usuario</h1>

      <div className="profile__info">      
        <p><strong>Nombre:</strong> {currentUser.nombre}</p>
        <p><strong>ID de Usuario:</strong> {currentUser.id}</p>
      </div>

      <h2 className="profile__subtitle">Historial de alquileres</h2>
      
      {rentals.length === 0 ? (
        <p className="profile__empty">No has alquilado ningún libro.</p>
      ) : (
        <ul className="profile__history">
          {rentals.map((r) => (
            <li key={r.isbn13}>
              <strong>{r.nombre}</strong> — alquilado por {r.plazoDias} días
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
