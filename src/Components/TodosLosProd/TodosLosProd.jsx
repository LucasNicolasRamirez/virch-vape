import React, { useEffect, useState } from 'react';
import { Typography} from '@mui/material';
import Card from '../CardProducto/CardProducto';
import styles from '../Cuerpo/Cuerpo.module.css';
import { productosData } from '../../Data/ProductosMock';

function TodosLosProd() {

    const categoria = 'Todos Los Productos';
    const [shuffledProducts, setShuffledProducts] = useState([]);

    useEffect(() => {
        const shuffled = [...productosData].sort(() => Math.random() - 0.5);
        setShuffledProducts(shuffled);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={styles.cuerpo}>
            <Typography variant="h5" sx={{ width: '100%' }}>
                {categoria}
            </Typography>


            <div className={styles.grid}>
            {shuffledProducts.map(producto => (
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