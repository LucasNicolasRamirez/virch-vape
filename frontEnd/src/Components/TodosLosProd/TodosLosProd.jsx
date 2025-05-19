import React, { useEffect, useState, useMemo } from 'react';
import { Typography, useMediaQuery, Fade } from '@mui/material';
import Card from '../CardProducto/CardProducto';
import styles from './TodosLosProd.module.css';
import { productosData } from '../../Data/ProductosMock';
import { ExpandMore } from '@mui/icons-material';

function TodosLosProd() {
    const categoria = 'Todos los Productos';
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const initialProducts = useMemo(() =>
        [...productosData].sort(() => Math.random() - 0.5),
        []
    );

    useEffect(() => {
        setShuffledProducts(initialProducts);
        setVisibleCount(isSmallScreen ? 10 : 20);
    }, [isSmallScreen, initialProducts]);

    const handleLoadMore = () => {
        const increment = isSmallScreen ? 10 : 20;
        setVisibleCount(prevCount => Math.min(prevCount + increment, shuffledProducts.length));
    };

    return (
        <div className={styles.todosLosProd}>
            <Typography variant="h5" sx={{ width: '100%' }}>
                {categoria}
            </Typography>

            <div className={styles.productosGrid}>
                {shuffledProducts.slice(0, visibleCount).map(producto => (
                    <Fade in={true} timeout={600} key={producto.id}>
              <div>
                <Card
                  id={producto.id}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  stock={producto.stock}
                />
              </div>
            </Fade>
                ))}
            </div>

            {visibleCount < shuffledProducts.length && (
                <button
                    className={styles.verMas}
                    onClick={handleLoadMore}
                >
                    Ver más
                    <ExpandMore sx={{
                        fontSize: 30,
                    }} />
                </button>
            )}
        </div>
    );
}

export default TodosLosProd;
