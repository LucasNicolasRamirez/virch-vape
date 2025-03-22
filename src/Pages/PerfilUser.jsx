import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Typography } from '@mui/material';

function PerfilUser() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido}>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>PERFIL DE USUARIO</Typography>
                <Typography variant='h2' sx={{ textAlign: 'center' }}>PROXIMAMENTE</Typography>
            </div>
        </div>
    );
}

export default PerfilUser;