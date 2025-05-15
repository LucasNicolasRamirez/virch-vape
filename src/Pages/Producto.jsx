import React from 'react';
import { Fade } from '@mui/material';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import ProductoSolo from '../Components/ProductoSolo/ProductoSolo';

function Producto() {


    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>

                <div className={styles.contenido} >
                    <ProductoSolo />
                </div>

            </Fade>
        </div>
    );
}

export default Producto;