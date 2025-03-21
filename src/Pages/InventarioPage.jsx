import React from 'react';
import CardInventario from '../Components/ControlDeInventario/Inventario';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormInventario from '../Components/FormInventario/FormInventario';
import FiltroInventario from '../Components/FiltroInventario/FiltroInventario';

function PerfilUser() {
    return (
        <div className={styles.cuerpo} >
            <div className={styles.contenido} >
                <FormInventario/>
                <FiltroInventario/>
                <div className={styles.grid2}>         
                    <CardInventario />
                    <CardInventario />
                    <CardInventario />
                    <CardInventario />
                    <CardInventario />
                </div>

            </div>
        </div>
    );
}

export default PerfilUser;