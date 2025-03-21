import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import SubirComprobante from '../Components/SubirComprobante/SubirComprobante';
import ItemsCarrito from '../Components/ItemsCarrito/ItemsCarrito';
import InfoPago from '../Components/InfoPago/InfoPago';


function Carrito() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido} >
                <div className={styles.carrito}>
                    <ItemsCarrito />
                    <InfoPago/>
                    <SubirComprobante />
                </div>
            </div>
        </div>
    );
}

export default Carrito;                 