// src/context/RentalContext.js
import React, { createContext, useState } from 'react';

export const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [rentals, setRentals] = useState([]);

  const rentBook = (book) => {
    setRentals([...rentals, { ...book, fechaAlquiler: new Date(), plazoDias: 14 }]);
  };

  const extendRental = (isbn13) => {
    setRentals((prev) =>
      prev.map((r) =>
        r.isbn13 === isbn13
          ? { ...r, plazoDias: r.plazoDias + 7 }
          : r
      )
    );
  };

  return (
    <RentalContext.Provider value={{ rentals, rentBook, extendRental }}>
      {children}
    </RentalContext.Provider>
  );
};
