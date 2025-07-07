// src/pages/Catalog/Catalog.jsx
import React, { useState } from 'react';
import useBooks from '../../hooks/useBooks';
import useSearch from '../../hooks/useSearch';
import BookList from '../../components/books/bookList/bookList';
import SearchFilter from '../../components/books/searchFilter/searchFilter';
import Pagination from '../../components/books/pagination/pagination';

import '../../styles/pages/catalog.css'

const ITEMS_PER_PAGE = 15;

export default function Catalog() {
  const { books } = useBooks();
  const { query, setQuery, filterBooks } = useSearch();
  const filtered = filterBooks(books);

  //console.log("🔍 Query:", query);
  //console.log("📚 Total libros:", books.length);
  //console.log("📘 Filtrados:", filtered.map((b) => b.nombre));

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <section className="catalog"> 
      <h1 className="catalog__title">Catálogo de Libros</h1>
      <div className="catalog__filters">
        <SearchFilter query={query} onChange={setQuery} />
      </div>
      
      <div className="catalog__list">
        <BookList books={paginated} />
      </div>
      
      <div className="catalog__pagination">
        {/*Error: <p>Página: <Pagination totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} /> </p>*/} 
        <span>Página</span>
        <Pagination totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} />
      </div>
    </section>
  );
}
