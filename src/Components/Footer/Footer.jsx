import React from "react";
import { Box, Container, Typography, Link, Grid, Divider } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: "95%",
                bgcolor: "rgba(68, 68, 68, 0.8)",
                color: "currentColor",
                py: 1,
                margin: "0 auto",
                mt: "auto",
                backdropFilter: "blur(2px)",
                borderTopRightRadius: "20px",
                borderTopLeftRadius: "20px",
                boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
            }}
        >
            <Box >
                <Typography variant="body1" className={styles.tituloVirch} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'10px' }} >
                    VirchVape
                </Typography>

                <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'10px' }} >
                    Contacto: info@virchvape.com
                </Typography>

                <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom:'10px' }} >
                    Teléfono: +54 9 11 1234-5678
                </Typography>
            </Box>

            <Divider color='gray' sx={{ width:'95%',margin:'auto' }} />

            <Box textAlign="center" mt={1}>
                <Typography variant="body1">
                    &copy; {new Date().getFullYear()} VirchVape. Todos los derechos reservados.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'end', marginRight: '90px', gap: '10px', alignItems: 'center' }} >
                    <Typography variant="body1" >Desarrollado por</Typography>
                    <Link href="https://portafolio-eosin-two.vercel.app" target="_blank" sx={{ textDecoration: 'none', color: 'currentColor' }} >
                        <Typography variant="body1" className={styles.developerLink} >
                            LR.DEV
                        </Typography>
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;