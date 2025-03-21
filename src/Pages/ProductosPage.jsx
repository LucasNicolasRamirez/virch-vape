import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Divider } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import FiltroCat from '../Components/FiltroCategorias/FiltroCategorias';

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
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    return (

        <div className={styles.cuerpo}>
            <div className={styles.contenido} >
                <Typography variant="h4" sx={{ color: "currentColor" }}>
                    {categoriaFormateada}
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 , color: 'currentColor'}}>
                    Explora nuestra sección de {categoriaFormateada}
                </Typography>
               <FiltroCat/>

                <Divider color="gray" />

                <div className={styles.grid}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>

    );
}

export default ProductosPage;