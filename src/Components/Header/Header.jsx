import React from 'react';
import { Button, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import IconoCarrito from "../BotonCarrito/Carrito";
import Productos from "../Productos/Productos";
import CambioTema from "../BotonTema/BotonTema";
import BotonWsp from "../BotonWsp/BotonWsp";
import MenuPequeno from '../MenuPequeno/MenuPequeno';

function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    
    };

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.nav}>

                    <MenuPequeno  className={styles.loginHamb} />

                    <div className={styles.nav1}>
                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/")}>
                            Inicio
                        </Button>

                        <Productos />

                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/contacto")}>
                            Contacto
                        </Button>
                        <Divider orientation="vertical" flexItem />
                    </div>

                </div>

                <div className={styles.title}>
                    VirchVape
                </div>

                <div className={styles.login}>
                    <IconoCarrito onClick={() => handleNavigation("/carrito")} />


                    <div className={styles.login1} style={{ paddingLeft: '10px' }}>
                    <Divider orientation="vertical" flexItem />
                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/inventario")}>
                            Inventario
                        </Button>

                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/iniciar-sesion")}>
                            Iniciar Sesión
                        </Button>

                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/perfil")}>
                            Perfil
                        </Button>
                    </div>


                </div>
            </div>

            <div className={styles.botonTema}>
                <CambioTema />
            </div>

            <div className={styles.botonWsp}>
                <BotonWsp />
            </div>
        </header>
    );
}

export default Header;