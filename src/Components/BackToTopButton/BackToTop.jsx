import React from 'react';
import { Box, Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollTop = () => {
  // Función para hacer scroll hacia arriba
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Desplazamiento suave
    });
  };

  return (
    <Box
      role="presentation"
      sx={{
        position: 'fixed',
        bottom: 20,  // Fijo en la parte inferior
        right: 20,   // Fijo en la parte derecha
        zIndex: 9999,  // Asegura que esté por encima de otros elementos
      }}
    >
      <Fab
        size="medium"
        color="primary"
        aria-label="scroll back to top"
        onClick={handleClick}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
};

export default ScrollTop;
