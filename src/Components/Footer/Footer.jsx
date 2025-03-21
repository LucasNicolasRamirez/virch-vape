import React from 'react';
import { Divider } from '@mui/material';
import  './Footer.css';

function Footer() {
    return (


        <div className='pieDePag'>

            <div className='contactInfo'>
                <h3 className='tituloVirch'>VirchVape</h3>
                <p>Contacto: info@virchvape.com</p>
                <p>Teléfono: +54 9 11 1234-5678</p>
            </div>

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
        </div>

    )
}

export default Footer;