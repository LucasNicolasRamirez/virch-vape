import React, { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Divider } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import FiltroCat from '../Components/FiltroCategorias/FiltroCategorias';
import { productosData } from '../Data/ProductosMock';

export const ProductosPage = () => {
  const { id: categoria } = useParams();

  const categoriaFormateada = useMemo(() => {
    if (!categoria || categoria === 'todos-los-productos') return 'Todos los Productos';
    return categoria.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }, [categoria]);

  const productosFiltrados = useMemo(() => {
    return categoria === 'todos-los-productos'
      ? productosData
      : productosData.filter(producto => producto.categoriaId === categoria);
  }, [categoria]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cuerpo}>
      <div className={styles.contenido}>
        <Typography variant="h4" sx={{ color: 'currentColor' }}>{categoriaFormateada}</Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'currentColor' }}>
          Explora nuestra sección de {categoriaFormateada}
        </Typography>

        <FiltroCat />
        <Divider color="gray" />

        <div className={styles.grid}>
          {productosFiltrados.map(producto => (
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
    </div>
  );
};
