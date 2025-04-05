import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import ItemsCarrito from '../Components/ItemsCarrito/ItemsCarrito';


function Carrito() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido} >
                <div className={styles.carrito}>
                    <ItemsCarrito />
                </div>
            </div>
        </div>
    );
}

export default Carrito;                 