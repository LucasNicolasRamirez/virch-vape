import React, { useState } from "react";
import { useCart } from "../ContextoCarrito/ContextoCarrito";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./ItemsCarrito.module.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import image from "../../assets/iconos/image.png";

const ItemsCarrito = () => {
  const { cart, increment, decrement, deleteProduct } = useCart();
  const [alertOpen, setAlertOpen] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.precio * item.count, 0);
  const envio = 5000;
  const total = subtotal + envio;


  const handleDeleteClick = (id) => {
    deleteProduct(id);
    setAlertOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertOpen(false);
  };
  return (
    <>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="success" variant="filled">
          Se eliminó el producto del carrito
        </Alert>
      </Snackbar>

      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <h2 className={styles.emptyCartTitle}>Tu carrito está vacío</h2>
          <img
            className={styles.emptyCartImage}
            src={image}
            alt="Carrito vacío"
          />
          
          <p className={styles.emptyCartText}>Agrega productos para comenzar a comprar.</p>
        
          <Button variant="contained" onClick={() => window.location.href = "/productos/todos-los-productos"}>
            Ir a Productos
          </Button>
        </div>
      ) : (

      <div className={styles.masterContainer}>
        <div className={styles.card}>
          <label className={styles.title}>Tus Productos</label>
          <div className={styles.products}>
            {cart.map((item) => (
              <div key={item.id} className={styles.product}>
                <img
                  className={styles.productImage}
                  src={item.imagen}
                  alt={item.name}

                />
                <div className={styles.productInfo}>
                  <span className={styles.productName}>{item.marca} {item.nombre}</span>
                  <p className={styles.productDescription}>{item.nombre} </p>
                  <p className={styles.productDescription}>{item.descripcion} </p>
                  <p className={styles.productDetails}>{item.details}</p>
                </div>
                <div className={styles.quantity}>
                  <Button onClick={() => decrement(item.id)} disabled={item.count === 1}>
                    <RemoveIcon sx={{ color: 'white' }} />
                  </Button>
                  <span className={styles.quantityValue}>{item.count}</span>
                  <Button onClick={() => increment(item.id)} disabled={item.count === 10}>
                    <AddIcon sx={{ color: 'white' }} />
                  </Button>
                </div>
                <label className={`${styles.price} ${styles.small}`}>
                  ${(item.precio * item.count).toLocaleString()}
                </label>
                <DeleteIcon className={styles.deleteIcon} onClick={() => handleDeleteClick(item.id)} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.card} ${styles.checkout}`}>
          <label className={styles.title}>Suma Total de productos</label>
          <div className={styles.details}>
            <span className={styles.detailLabel}>Subtotal:</span>
            <span className={styles.detailValue}>${subtotal.toLocaleString()}</span>
            <span className={styles.detailLabel}>Envío:</span>
            <span className={styles.detailValue}>${envio.toLocaleString()}</span>
          </div>
          <div className={styles.checkoutFooter}>
            <label className={styles.price}>
              <sup className={styles.priceSup}>$</sup>{total.toLocaleString()}
            </label>
            <Button variant="contained">Proceder al pago</Button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};

export default ItemsCarrito;
