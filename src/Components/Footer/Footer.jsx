import { Divider } from '@mui/material';
import styles from './Footer.module.css';

function Footer() {
    return (


        <div className={styles.footer}>

            <div className={styles.contactInfo}>
                <p>Contacto: info@virchvape.com</p>
                <p>Teléfono: +54 9 11 1234-5678</p>
            </div>

            {/* <div className={styles.footerLinks}>
                    <a href="/terms" className={styles.footerLink}>Términos y condiciones</a>
                    <a href="/privacy" className={styles.footerLink}>Política de privacidad</a>
                    <a href="/contacto" className={styles.footerLink}>Contacto</a>
                </div> */}

            <Divider color="gray" sx={{ width: '100%', margin: '10px 0' }} />

            <div className={styles.developerInfo}>
                <p className={styles.developerText}> © 2025 Todos los derechos reservados</p>
                <p className={styles.infoDev}>Desarrollado por</p>
                <a className={styles.developerLink} href="https://portafolio-eosin-two.vercel.app" target="_blank" rel="noopener noreferrer">
                    <p className={styles.logoContainer}>
                        LR.DEV
                    </p>
                </a>
            </div>
        </div>

    )
}

export default Footer;