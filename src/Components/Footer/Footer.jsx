import React from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
        <Box
            component="footer"
            sx={{
                width: "100%",
                bgcolor: "rgba(68, 68, 68, 0.8)",
                color: "currentColor",
                py: 4,
                margin: "0 auto",
                mt: 0,
                backdropFilter: "blur(2px)",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Box sx={{ justifyItems: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                <Box >
                    <p className={styles.logo} > 
                        VirchVape
                    </p>
                </Box>
                <Typography variant="body1" sx={{ justifyContent: 'center', alignItems: 'center', margin: '15px' }} >
                    Contacto: info@virchvape.com
                </Typography>

                <Typography variant="body1" sx={{ justifyContent: 'center', alignItems: 'center', margin: '15px' }} >
                    Teléfono: +54 9 11 1234-5678
                </Typography>
            </Box>

            <Divider color='gray' sx={{ width: '95%', margin: 'auto' }} />

            <Box textAlign="center" mt={2}>
                <Typography variant="body1">
                    &copy; {new Date().getFullYear()} VirchVape. Todos los derechos reservados.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'end', marginRight: '90px', gap: '10px', alignItems: 'center' }} >
                    <Typography variant="body1" >Desarrollado por</Typography>
                    <a href="https://www.google.com" target="_blank" className={styles.developerLink} sx={{ textDecoration: 'none', color: 'currentColor' }} >
                        LR.DEV
                    </a>
                </Box>
            </Box>
        </Box>
        </div>
    );
};

export default Footer;