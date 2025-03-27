import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import prod3 from '../../assets/imagenes/prod3.png';
import styles from './CardProducto.module.css'; 

// Hook personalizado para manejar el mensaje de stock
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

function Card({id, nombre, precio, stock}) {
  const [showButton, setShowButton] = useState(false);
  const { stockMessage, stockClass } = useStockMessage(stock);

  const handleMouseEnter = () => {
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };



  return (
    <div className={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={styles.wrapper}>
        <div className={styles.cardImage}>
          <img src={prod3} alt={nombre} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
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
        <button className={styles.cardBtn}>Agregar al carrito</button>
      </div>
      <p  className={`${styles.tag} ${styles[stockClass]}`}> {stockMessage}</p>
    </div>
  );
};

export default Card;