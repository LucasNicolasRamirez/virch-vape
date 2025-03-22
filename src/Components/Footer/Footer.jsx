// import { Divider } from '@mui/material';
// import styles from './Footer.module.css';

// function Footer() {
//     return (


//         <div className={styles.pieDePag}>

//             <div className={styles.contactInfo}>
//                 <h3 className={styles.tituloVirch} >VirchVape</h3>
//                 <p>Contacto: info@virchvape.com</p>
//                 <p>Teléfono: +54 9 11 1234-5678</p>
//             </div>

//             <Divider color="gray" sx={{ width: '95%', margin: '10px 0' }} />

//             <p className={styles.developerText}> © 2025 Todos los derechos reservados</p>

//             <div className={styles.developerInfo}>
//                 <p className={styles.infoDev}>Desarrollado por</p>
//                 <a className={styles.developerLink} href="https://portafolio-eosin-two.vercel.app" target="_blank" >
//                     <p className={styles.logoContainer}>
//                         LR.DEV
//                     </p>
//                 </a>
//             </div>
//         </div>

//     );
// };

// export default Footer;

import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box 
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We provide high-quality products and excellent customer service.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Home
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                About
              </Link>
            </Box>
            <Box>
              <Link href="#" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: info@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;