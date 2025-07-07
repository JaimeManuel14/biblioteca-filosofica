import React from 'react';
import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__quote">
        “Solo sé que nada sé.” — Sócrates
      </p>
      <p className="footer__info">
        Biblioteca Filosófica © {year} — Sistema de gestión de libros de filosofía
      </p>
    </footer>
  );
}