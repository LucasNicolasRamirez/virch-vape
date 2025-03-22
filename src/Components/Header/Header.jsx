import { Button, Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import IconoCarrito from "../BotonCarrito/Carrito";
import Productos from "../Productos/Productos";
import CambioTema from "../BotonTema/BotonTema";
import BotonWsp from "../BotonWsp/BotonWsp";

function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    };

    return (
        <header>
            <div className={styles.header}>
                <div className={styles.nav}>
                    <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/")}>
                        Home
                    </Button>

                    <Productos />

                    <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/contacto")}>
                        Contacto
                    </Button>
                </div>

                <div className={styles.title}>
                    VirchVape
                </div>

                <div className={styles.login}>
                    <IconoCarrito onClick={() => handleNavigation("/carrito")} />

                    <Divider orientation="vertical" flexItem />

                    <div className={styles.login} style={{ paddingLeft: '10px' }}>
                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/inventario")}>
                            Inventario
                        </Button>

                        <Button sx={{ color: "#cecece", borderRadius: "20px", fontSize: '0,75rem' }} onClick={() => handleNavigation("/perfil")}>
                            Iniciar Sesión
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