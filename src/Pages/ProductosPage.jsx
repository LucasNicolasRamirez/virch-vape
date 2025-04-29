import React, { useEffect, useMemo, useState, useCallback} from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Divider } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import FiltroCat from '../Components/FiltroCategorias/FiltroCategorias';
import { productosData } from '../Data/ProductosMock';

export const ProductosPage = () => {
  const { id: categoria } = useParams();
  const [filtro, setFiltro] = useState({ categoria: '', marca: '', nombre: '', nicotina: '', tamano: '' });

  const categoriaFormateada = useMemo(() => {
      if (!categoria || categoria === 'todos-los-productos') return 'Todos los Productos';
      return categoria.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }, [categoria]);

  const productosFiltrados = useMemo(() => {
      const productos = categoria === 'todos-los-productos'
          ? productosData
          : productosData.filter(producto => producto.categoriaId === categoria);

      // Aplicar filtros de marca y nombre
      return productos.filter(producto => {
        const coincideMarca = filtro.marca ? producto.marca.toLowerCase().includes(filtro.marca.toLowerCase()) : true;
        const coincideNombre = filtro.nombre ? producto.nombre.toLowerCase().includes(filtro.nombre.toLowerCase()) : true;
        const coincideNicotina = filtro.nicotina ? producto.nicotina?.toLowerCase().includes(filtro.nicotina.toLowerCase()) : true;
        const coincideTamano = filtro.tamano ? producto.tamano?.toLowerCase().includes(filtro.tamano.toLowerCase()) : true;

        return coincideMarca && coincideNombre && coincideNicotina && coincideTamano;
    });
}, [categoria, filtro]);



  const handleFilterChange = useCallback((nuevoFiltro) => {
    setFiltro(nuevoFiltro);
}, []);

  return (
    <div className={styles.cuerpo}>
      <div className={styles.contenido}>
        <Typography variant="h4" sx={{ color: 'currentColor' }}>{categoriaFormateada}</Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'currentColor' }}>
          Explora nuestra sección de {categoriaFormateada}
        </Typography>

        <FiltroCat categoriaActual={categoria} onFiltrar={handleFilterChange} />
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
