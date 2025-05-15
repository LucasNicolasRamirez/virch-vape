import React from 'react';
import { Fade } from '@mui/material';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import ItemsCarrito from '../Components/ItemsCarrito/ItemsCarrito';


function Carrito() {
    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>

                <div className={styles.contenido} >
                    <div className={styles.carrito}>
                        <ItemsCarrito />
                    </div>
                </div>

            </Fade>
        </div>
    );
}

export default Carrito;                 