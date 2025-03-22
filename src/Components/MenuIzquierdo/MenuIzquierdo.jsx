import React from 'react';
import { Button, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../MenuDerecho/MenuDerecho.module.css';
import { useNavigate } from 'react-router-dom';
import Productos from '../Productos/Productos';

function MenuIzquierdo() {
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
                                    <div className={styles.nav1}>
                                        <Button
                                            sx={{
                                                color: "#cecece",
                                                borderRadius: "20px",
                                                fontSize: '0,75rem',
                                                '@media (max-width: 1280px)':
                                                    { color: "currentColor" },
                                            }}
                                            onClick={(event) => {
                                                handleNavigation("/");
                                                handleClose(event);
                                            }}>
                                            Home
                                        </Button>

                                        <Productos handleClose={(event) => {
                                            handleClose(event); // Cierra el menú izquierdo
                                        }} />

                                        <Button
                                            sx={{
                                                color: "#cecece",
                                                borderRadius: "20px",
                                                fontSize: '0,75rem',
                                                '@media (max-width: 1280px)':
                                                    { color: "currentColor", },
                                            }}
                                            onClick={(event) => {
                                                handleNavigation("/contacto");
                                                handleClose(event);
                                            }}>
                                            Contacto
                                        </Button>
                                    </div>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default MenuIzquierdo;