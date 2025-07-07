// src/pages/Catalog/Catalog.jsx
import React, { useState } from 'react';
import useBooks from '../../hooks/useBooks';
import useSearch from '../../hooks/useSearch';
import BookList from '../../components/books/bookList/bookList';
import SearchFilter from '../../components/books/searchFilter/searchFilter';
import Pagination from '../../components/books/pagination/pagination';

import '../../styles/pages/catalog.css'

const ITEMS_PER_PAGE = 4;

export default function Catalog() {
  const { books } = useBooks();
  const { query, setQuery, filterBooks } = useSearch();
  const filtered = filterBooks(books);

  const [currentPage, setCurrentPage] = useState(0);
  const start = currentPage * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  return (
    <section>
      <h1>Catálogo de Libros</h1>
      <SearchFilter query={query} onChange={setQuery} />
      <BookList books={paginated} />
      <hr/>
      <p>Pagina: <Pagination totalPages={totalPages} currentPage={currentPage} onChange={setCurrentPage} /> </p>
    </section>
  );
}
