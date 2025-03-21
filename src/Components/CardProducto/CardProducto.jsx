import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import prod3 from '../../assets/imagenes/prod3.png';
import styles from './CardProducto.module.css'; 

function Card() {
  const [showButton, setShowButton] = useState(false);

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
          <img src={prod3} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
          {showButton && (
            <Link to={`/producto`} className={styles.modalButton}>
              Ver más
            </Link>
          )}
        </div>
        <div className={styles.content}>
          <p className={styles.title}>UIVERSE PREMIUM FONT (REGULAR)</p>
          <p className={styles.price}>$120.000</p>
        </div>
        <button className={styles.cardBtn}>Agregar al carrito</button>
      </div>
      <p className={styles.tag}> En stock</p>
    </div>
  );
};

export default Card;