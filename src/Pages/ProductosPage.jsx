import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Divider, Grid } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import FiltroCat from '../Components/FiltroCategorias/FiltroCategorias';
import prod3 from '../assets/imagenes/prod3.png';

function ProductosPage() {
    const { categoria } = useParams();

    const formatCategoria = (cat) => {
        if (!cat) return 'Todos los Productos';
        return cat.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    const categoriaFormateada = formatCategoria(categoria);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const initialProductos = [
        { id: 1, nombre: 'Producto 1', precio: 120000, descripcion: 'Descripción del producto 1', imagen: prod3, stock: 10 },
        { id: 2, nombre: 'Producto 2', precio: 120000, descripcion: 'Descripción del producto 2', imagen: prod3, stock: 10 },
        { id: 3, nombre: 'Producto 3', precio: 120000, descripcion: 'Descripción del producto 3', imagen: prod3, stock: 10 },
        { id: 4, nombre: 'Producto 4', precio: 120000, descripcion: 'Descripción del producto 4', imagen: prod3, stock: 10 },
        { id: 5, nombre: 'Producto 5', precio: 120000, descripcion: 'Descripción del producto 5', imagen: prod3, stock: 10 },
        { id: 6, nombre: 'Producto 6', precio: 120000, descripcion: 'Descripción del producto 6', imagen: prod3, stock: 10 },
        { id: 7, nombre: 'Producto 7', precio: 120000, descripcion: 'Descripción del producto 7', imagen: prod3, stock: 10 },
        { id: 8, nombre: 'Producto 8', precio: 120000, descripcion: 'Descripción del producto 8', imagen: prod3, stock: 10 },
        { id: 9, nombre: 'Producto 9', precio: 120000, descripcion: 'Descripción del producto 9', imagen: prod3, stock: 10 },
        { id: 10, nombre: 'Producto 10', precio: 120000, descripcion: 'Descripción del producto 10', imagen: prod3, stock: 10 },
        { id: 11, nombre: 'Producto 11', precio: 120000, descripcion: 'Descripción del producto 11', imagen: prod3, stock: 10 },
        { id: 12, nombre: 'Producto 12', precio: 120000, descripcion: 'Descripción del producto 12', imagen: prod3, stock: 10 },
        { id: 13, nombre: 'Producto 13', precio: 120000, descripcion: 'Descripción del producto 13', imagen: prod3, stock: 10 },
    ];
    const [productos, setProductos] = useState(initialProductos);




    return (

        <div className={styles.cuerpo}>
            <div className={styles.contenido} >

                <Typography variant="h4" sx={{ color: "currentColor" }}>
                    {categoriaFormateada}
                </Typography>

                <Typography variant="body1" sx={{ mt: 1, color: 'currentColor' }}>
                    Explora nuestra sección de {categoriaFormateada}
                </Typography>
                <FiltroCat />

                <Divider color="gray" />

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {productos.map(producto => (
                        <Grid item key={producto.id} xs={2} sm={4} md={3} lg={6}>
                            <Card id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>

    );
}

export default ProductosPage;