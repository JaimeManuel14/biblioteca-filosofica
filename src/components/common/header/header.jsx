import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Biblioteca Filosófica</h1>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item"><Link to="/">Inicio</Link></li>
            <li className="header__item"><Link to="/catalog">Catálogo</Link></li>
            <li className="header__item"><Link to="/rentals">Mis Alquileres</Link></li>
            <li className="header__item"><Link to="/profile">Perfil</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}