import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Stack, Typography, Box, Divider } from '@mui/material';
import ContactImage from '../assets/imagenes/logo.png';
import RedesSociales from '../Components/RedesSociales/RedesSociales';


function ContactoPage() {
    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido}>
                <Typography variant="h4" >
                    Contactanos
                </Typography>

                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={2}
                    alignItems="center"
                    sx={{

                        borderRadius: '15px',
                        padding: '20px',
                        marginTop: '20px',
                        width: '100%'
                    }}
                >

                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                width: '60%',
                                maxHeight: 'auto',
                                objectFit: 'cover',
                                borderRadius: '40px'
                            }}
                            src={ContactImage}
                            alt="Contacto VirchVape"
                        />
                    </Box>

                    <Divider
                        orientation="vertical"
                        flexItem
                        sx={{
                            color: 'gray'
                        }}
                    />

                    <Box
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            gap: '30px'
                        }}
                    >
                        <Typography variant="h5">
                            Estos son nuestros canales de contacto:
                        </Typography>
                        <RedesSociales />
                    </Box>
                </Stack>

            </div>
        </div>
    );
}

export default ContactoPage;