import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

function Productos() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (event && anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    };

const handleCategorySelect = (categoria) => {
    setOpen(false);
    if (categoria === 'Todos los productos') {
        navigate(`/productos/todos-los-productos`); 
    } else {
        navigate(`/productos/${categoria.toLowerCase().replace(/\s+/g, '-')}`);
    }
};



    return (
        <div>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                endIcon={<ArrowDropDownIcon />}
                sx={{
                    color: "#cecece",
                    borderRadius: "20px",
                    fontSize: '0,75rem',
                    '@media (max-width: 1280px)': {
                        color: "currentColor",
                    },
                }}

            >
                Productos
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
                                backgroundColor: "rgba(68, 68, 68, 0.8)",
                                backdropFilter: "blur(2px)",
                                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
                                borderRadius: "20px",
                                '@media (max-width: 1280px)': {
                                            backgroundColor: "rgba(68, 68, 68, 1)",
                                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
                                            borderRadius: "20px",
                                            marginLeft: "100px",
                                            zIndex: 1000,
                                        },
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                    sx={{
                                        color: "#cecece",
                                        fontSize: '0,75rem',
                                        '@media (max-width: 1280px)': {
                                            borderRadius: "20px",
                                        },

                                    }}
                                >
                                    <MenuItem onClick={() => handleCategorySelect('Todos los productos')}>Todos los productos</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Liquidos')}>Liquidos</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Sales')}>Sales</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Pods Descartables')}>Pods Descartables</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Pods Recargables')}>Pods Recargables</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Kits de inicio')}>Kits de inicio</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Kits avanzados')}>Kits avanzados</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Mods')}>Mods</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Atomizadores')}>Atomizadores</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Baterias')}>Baterías</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Cargadores')}>Cargadores</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Repuestos')}>Repuestos</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Accesorios')}>Accesorios</MenuItem>
                                    <MenuItem onClick={() => handleCategorySelect('Otros')}>Otros</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
export default Productos;