import React from 'react';
import { Typography, Divider, Fade } from '@mui/material';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import GaleriaImagenes from '../Components/GaleriaImagenes/GaleriaImagenes';
import GaleriaProductos from '../Components/GaleriaProductos/GaleriaProductos';
import SobreNosotros from '../Components/SobreNosotros/SobreNosotros';
import TodosLosProd from '../Components/TodosLosProd/TodosLosProd';

function Home() {
    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>
                <div className={styles.contenido}>

                    <Typography variant="h3" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                        Bienvenido a VirchVape
                    </Typography>

                    <Divider color="gray" />

                    <GaleriaImagenes />

                    <Divider color="gray" />

                    <GaleriaProductos />

                    <Divider color="gray" />

                    <TodosLosProd />

                    <Divider color="gray" />

                    <SobreNosotros />


                </div>
            </Fade>
        </div>
    );
}

export default Home;