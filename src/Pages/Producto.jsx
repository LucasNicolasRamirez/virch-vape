import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import ProductoSolo from '../Components/ProductoSolo/ProductoSolo';

function Producto() {


    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido} >
                <ProductoSolo />
            </div>
        </div>
    );
}

export default Producto;