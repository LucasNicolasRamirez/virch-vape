import React, { useState } from 'react';
import styles from './InfoPago.module.css';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Alert, Zoom } from '@mui/material';

const InfoPago = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage('Copiado!');
      setTimeout(() => setCopyMessage(''), 2000); 
    });
  };

  return (
    <div className={styles.infoPago}>
      <h1>Datos de pago:</h1>
      <p><span>Nombre del titular:</span> Pedro Sebastian Simonetti</p>
      <p >
        <span>Alias MercadoPago: </span>
        <span className={styles.copiar} onClick={() => copyToClipboard('virchvape.trelew')} style={{ cursor: 'pointer', marginLeft: '5px' }}>
          virchvape.trelew
          <ContentCopyIcon className={styles.copyIcon} style={{ marginLeft: '5px' }} />
        </span>

      </p>
      <p>
        <span>CVU: </span>
        <span className={styles.copiar} onClick={() => copyToClipboard('0000004837290945839054')} style={{ cursor: 'pointer', marginLeft: '5px' }}>
          0000004837290945839054
          <ContentCopyIcon className={styles.copyIcon} style={{ marginLeft: '5px' }} />
        </span>
      </p>
      <p><span>CUIL/CUIT: </span> 20-xxxxxxxx-7</p>
      <Zoom in={!!copyMessage} style={{ transitionDelay: copyMessage ? '100ms' : '0ms' }}>
        <div className={styles.alertContainer}>
          <Alert variant="filled" severity="success">
            {copyMessage}
          </Alert>
        </div>
      </Zoom>

    </div>
  );
};

export default InfoPago;