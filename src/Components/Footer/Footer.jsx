import React from 'react';
import { Divider } from '@mui/material';
import  './Footer.css';

function Footer() {
    return (


        <footer className='footer'>

            <div className='contactInfo'>
                <h3 className='tituloVirch'>VirchVape</h3>
                <p>Contacto: info@virchvape.com</p>
                <p>Teléfono: +54 9 11 1234-5678</p>
            </div>

            {/* <div className={styles.footerLinks}>
                    <a href="/terms" className={styles.footerLink}>Términos y condiciones</a>
                    <a href="/privacy" className={styles.footerLink}>Política de privacidad</a>
                    <a href="/contacto" className={styles.footerLink}>Contacto</a>
                </div> */}

            <Divider color="gray" sx={{ width: '100%', margin: '10px 0' }} />

            <div className='developerInfo'>
                <p className='developerText'> © 2025 Todos los derechos reservados</p>
                <p className='infoDev'>Desarrollado por</p>
                <a className='developerLink' href="https://portafolio-eosin-two.vercel.app" target="_blank" rel="noopener noreferrer">
                    <p className='logoContainer'>
                        LR.DEV
                    </p>
                </a>
            </div>
        </footer>

    )
}

export default Footer;