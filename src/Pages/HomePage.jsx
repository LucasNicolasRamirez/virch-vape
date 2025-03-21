import React from 'react';
import { Typography, Divider } from '@mui/material';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import GaleriaImagenes from '../Components/GaleriaImagenes/GaleriaImagenes';
import GaleriaProductos from '../Components/GaleriaProductos/GaleriaProductos';
import SobreNosotros from '../Components/SobreNosotros/SobreNosotros';
import TodosLosProd from '../Components/TodosLosProd/TodosLosProd';

function Home() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido}>
                <Typography variant="h3"  gutterBottom sx={{ textAlign: 'center' }}>
                    Bienvenido a VirchVape
                </Typography>

                <Divider color="gray" />

                <GaleriaImagenes/>

                <Divider color="gray" />

                <GaleriaProductos/>
                
                <Divider color="gray" />
                
                <TodosLosProd/>

                <Divider color="gray" />

                <SobreNosotros/>
                
            </div>
        </div>
    );
}

export default Home;