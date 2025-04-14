import React, { useEffect, useState } from 'react';
import { Typography, Button, useMediaQuery } from '@mui/material';
import Card from '../CardProducto/CardProducto';
import styles from '../Cuerpo/Cuerpo.module.css';
import { productosData } from '../../Data/ProductosMock';
import { ExpandMore } from '@mui/icons-material';

function TodosLosProd() {
    const categoria = 'Todos Los Productos';
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const initialCount = isSmallScreen ? 10 : 20;

    useEffect(() => {
        const shuffled = [...productosData].sort(() => Math.random() - 0.5);
        setShuffledProducts(shuffled);
        setVisibleCount(initialCount); 
        window.scrollTo(0, 0);
    }, [isSmallScreen, initialCount]);

    const handleLoadMore = () => {
        const increment = isSmallScreen ? 10 : 20;
        setVisibleCount(prevCount => Math.min(prevCount + increment, shuffledProducts.length));
    };

    return (
        <div className={styles.cuerpo}>
            <Typography variant="h5" sx={{ width: '100%' }}>
                {categoria}
            </Typography>

            <div className={styles.grid}>
                {shuffledProducts.slice(0, visibleCount).map(producto => (
                    <Card
                        key={producto.id}
                        id={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        stock={producto.stock}
                    />
                ))}
            </div>

            {visibleCount < shuffledProducts.length && (
                <div
                    onClick={handleLoadMore}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '3px 10px',
                        border: '1px solid currentColor',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        backgroundColor: isHovered ? 'grey' : 'transparent',

                    }}

                >
                    <span style={{ fontSize: '18px' }}>Ver más</span>
                    <ExpandMore sx={{
                        fontSize: 30,
                    }} />
                </div>
            )}
        </div>
    );
}

export default TodosLosProd;
