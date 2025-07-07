import React, { useEffect } from 'react';
import './popup.css';

export default function Popup({mensaje, onClose, tiempo = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, tiempo);
    return () => clearTimeout(timer);
  }, [onClose, tiempo]);

  return (
    <div className="popupmsg">
      <p>{mensaje}</p>
    </div>
  );
}
