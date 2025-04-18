import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormularioUser from '../Components/Formulario/FormularioUser';

function IniciarSesion() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido}>
                <FormularioUser/>
            </div>
        </div>
    );
}

export default IniciarSesion;