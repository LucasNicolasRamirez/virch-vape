import { Divider } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
    return (


        <footer className={styles.pieDePag}>

            <div className={styles.contactInfo}>
                <h3 className={styles.tituloVirch} >VirchVape</h3>
                <p>Contacto: info@virchvape.com</p>
                <p>Teléfono: +54 9 11 1234-5678</p>
            </div>

            <Divider color="gray" sx={{ width: '100%', margin: '10px 0' }} />

            <p className={styles.developerText}> © 2025 Todos los derechos reservados</p>

            <div className={styles.developerInfo}>
                <p className={styles.infoDev}>Desarrollado por</p>
                <a className={styles.developerLink} href="https://portafolio-eosin-two.vercel.app" target="_blank" rel="noopener noreferrer">
                    <p className={styles.logoContainer}>
                        LR.DEV
                    </p>
                </a>
            </div>
        </footer>

    );
};

export default Footer;