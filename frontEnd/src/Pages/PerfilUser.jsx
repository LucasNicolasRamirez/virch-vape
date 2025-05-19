import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography, Fade } from '@mui/material';
import PerfilUsuario from '../Components/PerfilUser/PerfilUsuario';

function PerfilUser() {
    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>
           
            <div className={styles.contenido}>
                <Typography variant='h3' sx={{ textAlign: 'center' }}>PERFIL DE USUARIO</Typography>
                <Typography variant='h3' sx={{ textAlign: 'center' }}>PROXIMAMENTE</Typography>
                <PerfilUsuario/>
            </div>
            </Fade>
        </div>
    );
}

export default PerfilUser;