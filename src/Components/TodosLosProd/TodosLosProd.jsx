import React, { useEffect } from 'react';
import { Typography, Divider } from '@mui/material';
import Card from '../CardProducto/CardProducto';
import styles from '../Cuerpo/Cuerpo.module.css';

function TodosLosProd() {
    

   
    // const formatCategoria = (cat) => {
    //     if (!cat) return 'Todos los Productos';
    //     return cat.split('-').map(word =>
    //         word.charAt(0).toUpperCase() + word.slice(1)
    //     ).join(' ');
    // };

    const categoria = 'Todos Los Productos';

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    }, []);

    return (

        <div className={styles.cuerpo}>
            
                <Typography variant="h5" >
                    {categoria}
                </Typography>


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

    );
}

export default TodosLosProd;