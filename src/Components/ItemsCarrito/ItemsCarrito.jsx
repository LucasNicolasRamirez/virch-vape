import React, { useState } from "react";
import kodama from "../../assets/imagenes/kodama.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styles from "./ItemsCarrito.module.css";

const ItemsCarrito = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "EVAS - Kodama 100ml", description: "Kodama", details: "100ml - 3mg", price: 20000, count: 1 },
    { id: 2, name: "EVAS - Kodama 100ml", description: "Kodama", details: "100ml - 3mg", price: 20000, count: 1 },
    { id: 3, name: "EVAS - Kodama 100ml", description: "Kodama", details: "100ml - 3mg", price: 20000, count: 1 },
  ]);

  const increment = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count < 10
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  };

  const decrement = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce((acc, product) => acc + product.price * product.count, 0);
  const envio = 5000;
  const total = subtotal + envio;

  return (
    <div className={styles.masterContainer}>
      <div className={`${styles.card} ${styles.cart}`}>
        <label className={styles.title}>Tus Productos</label>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <img
                src={kodama}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div>
                <span className={styles.productName}>{product.name}</span>
                <p className={styles.productDescription}>{product.description}</p>
                <p className={styles.productDetails}>{product.details}</p>
              </div>
              <div className={styles.quantity}>
                <Button onClick={() => decrement(product.id)} disabled={product.count === 1}>
                  <RemoveIcon />
                </Button>
                <span className={styles.quantityValue}>{product.count}</span>
                <Button onClick={() => increment(product.id)} disabled={product.count === 10}>
                  <AddIcon />
                </Button>
              </div>
              <label className={`${styles.price} ${styles.small}`}>
                ${(product.price * product.count).toLocaleString()}
              </label>
              <DeleteIcon className={styles.deleteIcon} onClick={() => deleteProduct(product.id)} />
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
  );
};

export default ItemsCarrito;
