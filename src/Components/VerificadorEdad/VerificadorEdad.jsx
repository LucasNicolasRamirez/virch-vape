import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  Backdrop,
  Fade,
} from "@mui/material";

const AgeVerificationModal = () => {
  const [open, setOpen] = useState(false); // Inicialmente cerrado

  useEffect(() => {
    const isVerified = localStorage.getItem("isAgeVerified");
    if (!isVerified) {
      setOpen(true); // Solo lo muestra si no está aceptado
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("isAgeVerified", "true"); // Guarda la verificación
    setOpen(false);
  };

  const handleExit = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <Modal
      open={open}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "lightgrey",
            borderRadius: 2,
            boxShadow: 24,
            p: { xs: 2, sm: 4 }, // Adaptar el padding según el tamaño de la pantalla
            maxWidth: { xs: "90%", sm: 400 }, // Ancho máximo para pantallas pequeñas
            textAlign: "center",
            width: "100%", // Asegura que ocupe todo el espacio disponible
          }}
        >
          <Typography
            variant="h5" // Usamos h5 en lugar de h4 en pantallas pequeñas
            gutterBottom
            sx={{ color: "red", fontWeight: "bold" }}
          >
            Contenido solo para mayores de 18 años.
          </Typography>
          <Typography variant="h6" sx={{ color: "black" }}>
            ⚠️ Advertencia ⚠️
          </Typography>
          <Typography variant="body2" sx={{ mb: 3, color: "black" }}>
            Este sitio está destinado exclusivamente a personas mayores de 18 años. Los productos mencionados contienen o pueden contener nicotina, una sustancia altamente adictiva. El acceso está estrictamente prohibido a menores de edad. Si no tenés la edad legal para consumir estos productos, por favor abandoná este sitio de inmediato.
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAccept}
              sx={{ borderRadius: 5 }}
            >
              Sí, soy mayor de 18
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleExit}
              sx={{ borderRadius: 5 }}
            >
              No, soy menor
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AgeVerificationModal;
