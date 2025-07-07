// src/components/rentals/ExtensionForm/ExtensionForm.jsx
import { useState } from 'react';
import React from 'react';
import useRentals from '../../../hooks/useRentals';

import PopupMsg from '../../common/pop_up/popup';

export default function ExtensionForm({ isbn13 }) {
  const { extendRental } = useRentals();

  const [msg, setMsg] = useState(null);

  const handleExtend = () => {
    extendRental(isbn13);
    setMsg('Plazo extendido 7 días más');
  };

  return (
    <>
      {msg && <PopupMsg mensaje={msg} onClose={() => setMsg(null)} />}
      <button onClick={handleExtend}>
        Extender préstamo
      </button>
    </>
  );
}
