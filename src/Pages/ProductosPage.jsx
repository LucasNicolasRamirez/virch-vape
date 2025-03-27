import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Divider } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import FiltroCat from '../Components/FiltroCategorias/FiltroCategorias';
import prod3 from '../assets/imagenes/prod3.png';

const initialProductos = [
    { id: 1, nombre: 'Producto 1', precio: 120000, descripcion: 'Descripción del producto 1', imagen: prod3, stock: 10, categoriaId: 'liquidos' },
    { id: 2, nombre: 'Producto 2', precio: 120000, descripcion: 'Descripción del producto 2', imagen: prod3, stock: 10, categoriaId: 'liquidos' },
    { id: 3, nombre: 'Producto 3', precio: 120000, descripcion: 'Descripción del producto 3', imagen: prod3, stock: 10, categoriaId: 'sales' },
    { id: 4, nombre: 'Producto 4', precio: 120000, descripcion: 'Descripción del producto 4', imagen: prod3, stock: 10, categoriaId: 'sales' },
    { id: 5, nombre: 'Producto 5', precio: 120000, descripcion: 'Descripción del producto 5', imagen: prod3, stock: 10, categoriaId: 'pods-descartables' },
    { id: 6, nombre: 'Producto 6', precio: 120000, descripcion: 'Descripción del producto 6', imagen: prod3, stock: 10, categoriaId: 'pods-descartables' },
    { id: 7, nombre: 'Producto 7', precio: 120000, descripcion: 'Descripción del producto 7', imagen: prod3, stock: 10, categoriaId: 'pods-recargables' },
    { id: 8, nombre: 'Producto 8', precio: 120000, descripcion: 'Descripción del producto 8', imagen: prod3, stock: 10, categoriaId: 'pods-recargables' },
    { id: 9, nombre: 'Producto 9', precio: 120000, descripcion: 'Descripción del producto 9', imagen: prod3, stock: 10, categoriaId: 'kits-de-inicio' },
    { id: 10, nombre: 'Producto 10', precio: 120000, descripcion: 'Descripción del producto 10', imagen: prod3, stock: 10, categoriaId: 'kits-de-inicio' },
    { id: 11, nombre: 'Producto 11', precio: 120000, descripcion: 'Descripción del producto 11', imagen: prod3, stock: 10, categoriaId: 'kits-avanzado' },
    { id: 12, nombre: 'Producto 12', precio: 120000, descripcion: 'Descripción del producto 12', imagen: prod3, stock: 10, categoriaId: 'kits-avanzado' },
    { id: 13, nombre: 'Producto 13', precio: 120000, descripcion: 'Descripción del producto 13', imagen: prod3, stock: 10, categoriaId: 'mods' },
    { id: 14, nombre: 'Producto 14', precio: 120000, descripcion: 'Descripción del producto 14', imagen: prod3, stock: 10, categoriaId: 'atomizadores' },
    { id: 15, nombre: 'Producto 15', precio: 120000, descripcion: 'Descripción del producto 15', imagen: prod3, stock: 10, categoriaId: 'baterías' },
    { id: 16, nombre: 'Producto 16', precio: 120000, descripcion: 'Descripción del producto 16', imagen: prod3, stock: 10, categoriaId: 'cargadores' },
    { id: 17, nombre: 'Producto 17', precio: 120000, descripcion: 'Descripción del producto 17', imagen: prod3, stock: 10, categoriaId: 'consumibles' },
    { id: 18, nombre: 'Producto 18', precio: 120000, descripcion: 'Descripción del producto 18', imagen: prod3, stock: 10, categoriaId: 'accesorios' },
    { id: 19, nombre: 'Producto 19', precio: 120000, descripcion: 'Descripción del producto 19', imagen: prod3, stock: 10, categoriaId: 'otros' },
];


export const ProductosPage = () => {
    const { id: categoria } = useParams();


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

    const filteredProductos = categoria === 'todos-los-productos' ?
        initialProductos :
        initialProductos.filter(producto => producto.categoriaId === categoria);

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

                <div className={styles.grid}>
                    {filteredProductos.map(producto => (
                        <Card id={producto.id} nombre={producto.nombre} precio={producto.precio} stock={producto.stock} />
                    ))}
                </div>
            </div>
        </div>

    );
};


export { initialProductos };