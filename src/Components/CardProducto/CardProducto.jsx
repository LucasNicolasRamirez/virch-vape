import React, { useState } from "react";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import prod3 from "../../assets/imagenes/prod3.png";
import styles from "./CardProducto.module.css";
import { useCart } from "../ContextoCarrito/ContextoCarrito";

// Hook personalizado para manejar mensajes de stock
function useStockMessage(stock) {
  let stockMessage;
  let stockClass;

  if (stock <= 0) {
    stockMessage = "SIN STOCK";
    stockClass = "sin-stock";
  } else if (stock <= 5) {
    stockMessage = "BAJO STOCK";
    stockClass = "bajo-stock";
  } else {
    stockMessage = "EN STOCK";
    stockClass = "en-stock";
  }

  return { stockMessage, stockClass };
}

function Card({ id, nombre, precio, stock }) {
  const [showButton, setShowButton] = useState(false);
  const { stockMessage, stockClass } = useStockMessage(stock);
  const { addToCart } = useCart();

  // Estados para el Snackbar
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  const handleAddToCart = () => {
    if (stock > 0) {
      addToCart({ id, nombre, precio, stock, imagen: prod3 }, 1);
      setAlertMessage(`"${nombre}" se agregó al carrito`);
      setAlertSeverity("success");
    } else {
      setAlertMessage("No se puede agregar al carrito porque no hay stock disponible.");
      setAlertSeverity("error");
    }
    setAlertOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setAlertOpen(false);
  };

  return (
    <>
      {/* Snackbar para las alertas */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={alertSeverity} variant="filled">
          {alertMessage}
        </Alert>
      </Snackbar>

      <div
        className={styles.card}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.wrapper}>
          <div className={styles.cardImage}>
            <img
              src={prod3}
              alt={nombre}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            {showButton && (
              <Link to={`/producto/${id}`} className={styles.modalButton}>
                Ver más
              </Link>
            )}
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{nombre}</p>
            <p className={styles.price}>${precio}</p>
          </div>
          <button className={styles.cardBtn} onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
        <p className={`${styles.tag} ${styles[stockClass]}`}>{stockMessage}</p>
      </div>
    </>
  );
}

export default Card;
