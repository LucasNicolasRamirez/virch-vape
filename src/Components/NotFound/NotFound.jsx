import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
  
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <ErrorOutlineIcon sx={{ fontSize: 80, color: "primary.main" }} />
        <Typography variant="h1" component="h1" sx={{ fontWeight: "bold" }}>
          404
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
        Oops! La página que buscas no existe.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleGoHome}
        sx={{ borderRadius: 2 }}
        >
        Volver al inicio
      </Button>
    </Container>
  );
};

export default NotFoundPage;
