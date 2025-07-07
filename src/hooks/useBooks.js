import { useContext } from 'react';
import { BooksContext } from '../context/booksContext';

export default function useBooks() {
  const { books, setBooks } = useContext(BooksContext);
  return { books, setBooks };
}
