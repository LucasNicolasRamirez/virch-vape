import React from 'react';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from './MenuDerecho.module.css';
import { useNavigate } from 'react-router-dom';

function MenuDerecho() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
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
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/iniciar-sesion");
                                        handleClose(event);
                                    }}
                                    >Iniciar Sesión
                                    </MenuItem>

                                    <MenuItem onClick={(event) => {
                                        handleNavigation("/perfil");
                                        handleClose(event);
                                    }}>
                                        Perfil
                                    </MenuItem>


                                    <MenuItem onClick={handleClose}>
                                        Salir
                                    </MenuItem>

                                    <MenuItem sx={{ bgcolor: 'grey' }} onClick={(event) => {
                                        handleNavigation("/inventario");
                                        handleClose(event);
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

export default MenuDerecho;