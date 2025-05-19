import React, { createContext, useState, useEffect } from 'react';

export const ContextoTema = createContext();

export const ProveedorTema = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useState(true); 

  useEffect(() => {
    document.body.classList.toggle('modo-oscuro', modoOscuro);
    document.body.classList.toggle('modo-claro', !modoOscuro);
  }, [modoOscuro]);

  const cambiarTema = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <ContextoTema.Provider value={{ modoOscuro, cambiarTema }}>
      {children}
    </ContextoTema.Provider>
  );
};