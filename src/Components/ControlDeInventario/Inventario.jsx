import React from 'react';
import styles from './Inventario.module.css';
import { Button, Typography } from '@mui/material';

const CardInventario = ({producto}) => {
    

    
    return (
      
       
            <div className={styles.cardContent}>
                <Typography variant='h6'className={styles.titleCard}>{producto.marca}</Typography>
                <Typography className={styles.nombre} >{producto.nombre}</Typography>
                <div className={styles.imageContainer}>
                    <img src={producto.imagen} alt={producto.nombre} className={styles.image} />
                </div>
                <Typography className={styles.price}>
                    <span>${producto.precio}</span>
                </Typography>
                    <span>Stock:{producto.stock}</span>
                <Typography className={styles.description}>Descripción: </Typography>
                <Typography className={styles.textoDesc}>{producto.descripcion}</Typography>
                <div className={styles.cardBtns} >
                    <Button variant='contained' sx={{borderRadius:2}}>Editar</Button>
                    <Button variant='contained' sx={{borderRadius:2}}>Eliminar</Button>
                </div>
            </div>

    );
}

export default CardInventario;
