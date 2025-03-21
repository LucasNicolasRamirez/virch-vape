import React, { useContext } from 'react';
import { ContextoTema } from '../ContextoTema/ContextoTema';
import styles from './BotonTema.module.css';

function CambioTema() {
  const { modoOscuro, cambiarTema } = useContext(ContextoTema);

  return (
    <label className={styles['switch']}>
      <input 
        type="checkbox" 
        checked={!modoOscuro}
        onChange={cambiarTema}
      />
      <span className={styles['slider']}></span>
    </label>
  );
}

export default CambioTema;