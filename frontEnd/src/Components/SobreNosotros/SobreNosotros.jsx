import React from "react";
import portada from '../../assets/imagenes/portada.png';
import styles from './SobreNosotros.module.css';
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

function SobreNosotros() {
  return (
    <div className={styles.Nosotros}>

      <img
        src={portada}
        alt="Portada VirchVape"
        className={styles.img}
      />

      <div className={styles.textContainer}>
        <Typography variant="h4">Sobre Nosotros</Typography>

        <Typography variant="body1">
          VirchVape, fundada en 2021, es una tienda de vapes e insumos para el vapeo,
          ubicada en la ciudad de Trelew, en el corazón del Valle Inferior del Río Chubut.
          
        </Typography>

        <Typography variant="body1">
          Nuestro nombre refleja nuestro vínculo con esta región, y nos hemos convertido en una de las pocas
        opciones de referencia para los vapeadores de la zona.
        </Typography>

        <Typography variant="body1">
          Ofrecemos una amplia gama de productos, incluyendo dispositivos de última generación, líquidos de sabores
          variados, resistencias, pods, repuestos y accesorios, garantizando calidad y variedad para todos los gustos y necesidades.
          Nos destacamos por nuestra atención personalizada, ayudando tanto a quienes están iniciándose en el mundo del vapeo
          como a los más experimentados.
        </Typography>

        <Link to="/productos/todos-los-productos" className={styles.Link}>
        <button className={styles.Button}>
          Descubre todo lo que tenemos para ofrecerte
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default SobreNosotros;