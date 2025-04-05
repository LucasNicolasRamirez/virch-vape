import React, { useEffect } from 'react';
import { Typography} from '@mui/material';
import Card from '../CardProducto/CardProducto';
import styles from '../Cuerpo/Cuerpo.module.css';
import { productosData } from '../../Data/ProductosMock';

function TodosLosProd() {

    const categoria = 'Todos Los Productos';

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    return (
        <div className={styles.cuerpo}>
            <Typography variant="h5" sx={{ width: '100%' }}>
                {categoria}
            </Typography>


            <div className={styles.grid}>
            {productosData.map(producto => (
                    <Card 
                        key={producto.id} 
                        id={producto.id} 
                        nombre={producto.nombre} 
                        precio={producto.precio} 
                        stock={producto.stock} 
                    />
                ))}

            </div>

        </div>

    );
}

export default TodosLosProd;