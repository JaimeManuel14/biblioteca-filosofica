// src/hooks/useRentals.js
import { useContext } from 'react';
import { RentalContext } from '../context/rentalContext';

export default function useRentals() {
  const { rentals, rentBook, extendRental } = useContext(RentalContext);
  return { rentals, rentBook, extendRental };
}
