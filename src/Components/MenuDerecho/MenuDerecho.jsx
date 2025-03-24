import React from 'react';
import { Button, ClickAwayListener, Divider, Grow, MenuItem, MenuList, Paper, Popper, Collapse } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './MenuDerecho.module.css';
import { useNavigate } from 'react-router-dom';

function MenuPequeño() {
    const [open, setOpen] = React.useState(false);
    const [subMenuOpen, setSubMenuOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
        setOpen(false);
        setSubMenuOpen(false);
    };


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
        setSubMenuOpen(false);
    };

    const handleSubMenuToggle = () => {
        setSubMenuOpen((prevOpen) => !prevOpen);
    };

    const handleCategorySelect = (categoria) => {
        setOpen(false);
        setSubMenuOpen(false);
        navigate(`/productos/${categoria.toLowerCase().replace(/\s+/g, '-')}`);
        window.scrollTo(0, 0);
    };

    const renderProductos = () => {
        const categorias = [
            "Todos los productos",
            "Liquidos",
            "Sales",
            "Pods Descartables",
            "Pods Recargables",
            "Kits de inicio",
            "Kits avanzados",
            "Mods",
            "Atomizadores",
            "Baterías",
            "Cargadores",
            "Consumibles",
            "Accesorios",
            "Otros",
        ];

        return categorias.map((categoria, index) => (
            <MenuItem
                key={index}
                onClick={() => handleCategorySelect(categoria)}
            >
                {categoria}
            </MenuItem>
        ));
    };

    return (
        <div className={styles.loginHamb}>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{ color: "#cecece" }}
            >
                <MenuIcon />
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper
                            sx={{
                                width: '170px',
                                color: '#cecece',
                                backgroundColor: 'rgba(56, 56, 56, 0.9)',
                                borderRadius: '20px',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                                padding: '10px',
                                maxHeight: '80vh', 
                                overflowY: 'auto',
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={(event) => {
                                        if (event.key === 'Tab' || event.key === 'Escape') {
                                            setOpen(false);
                                        }
                                    }}
                                >
                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/");
                                    }}
                                    >Home
                                    </MenuItem>

                                    <MenuItem
                                        onClick={handleSubMenuToggle}
                                        sx={{ display: 'flex', justifyContent: 'space-between' }}
                                    >
                                        Productos
                                        <ExpandMoreIcon
                                            sx={{
                                                transform: subMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                transition: 'transform 0.3s',
                                            }}
                                        />
                                    </MenuItem>

                                    <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                                        <MenuList>
                                            {renderProductos()}
                                        </MenuList>
                                    </Collapse>

                                    <Divider color="gray" />

                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/iniciar-sesion");
                                    }}
                                    >Iniciar Sesión
                                    </MenuItem>

                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/perfil");
                                    }}>
                                        Perfil
                                    </MenuItem>

                                    <MenuItem onClick={handleClose}>
                                        Salir
                                    </MenuItem>

                                    <Divider color="gray" />

                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/contacto");
                                    }}
                                    >Contacto
                                    </MenuItem>

                                    <MenuItem sx={{ bgcolor: 'grey' }} onClick={(event) => {
                                        handleNavigation("/inventario");
                                    }}>
                                        Inventario
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default MenuPequeño;