import { useState } from 'react';

export default function useSearch(initial = '') {
  const [query, setQuery] = useState(initial);

  const filterBooks = (books) =>
    books.filter((book) =>
      book.nombre.toLowerCase().includes(query.toLowerCase()) ||
      book.autor.toLowerCase().includes(query.toLowerCase()) ||
      book.isbn13.toString().includes(query.toLowerCase())
    );

  return { query, setQuery, filterBooks };
}
