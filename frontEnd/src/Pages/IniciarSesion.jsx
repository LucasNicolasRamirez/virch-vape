import React from 'react';
import { Fade } from '@mui/material';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormularioUser from '../Components/Formulario/FormularioUser';

function IniciarSesion() {
    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>
             
            <div className={styles.contenido}>
                <FormularioUser/>
            </div>
            
            </Fade>
        </div>
    );
}

export default IniciarSesion;