import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import styles from '../FiltroCategorias/FiltroCategorias.module.css';

const Marcas = [
    { label: 'MVH 60ml 3mg' },
    { label: 'EVIL 60ml 3mg' },
    { label: 'EVIL 60ml 6mg' },
    { label: 'SHIBUMI 60ml 3mg' },
    { label: 'SHIBUMI 60ml 6mg' },
    { label: 'ONE 60ml 3mg' },
    { label: 'ONE 60ml 6mg' },
    { label: 'EVAS 100ml 3mg' },
    { label: "MAD CAKE 60ml 3mg" },
    { label: 'ZOMO 60ml 3mg' }
];

const Categorias = [
    { label: 'Liquidos' },
    { label: 'Sales' },
    { label: 'Pods Descartables' },
    { label: 'Pods Recargables' },
    { label: 'Kits de inicio' },
    { label: 'Kits avanzados' },
    { label: 'Mods' },
    { label: 'Atomizadores' },
    { label: 'Baterías' },
    { label: 'Cargadores' },
    { label: 'Consumibles' },
    { label: 'Accesorios' },
    { label: 'Otros' }
];



function FiltroInventario() {
    return (
        <div className={styles.container}>
            <TextField
                id="outlined-basic"
                label="Buscar producto"
                variant="outlined"
                size='small'
                sx={{
                    width: '40%',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '40px',
                        color: 'currentColor',
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '40px',
                            bordercolor: 'currentColor'
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            bordercolor: 'currentColor'
                        }
                    }
                }}
                slotProps={{
                    inputLabel: {
                        sx: {
                            color: 'currentColor',
                            '&.Mui-focused': {
                                color: 'currentColor'
                            }
                        }
                    }
                }}
            />
            <Autocomplete
                disablePortal
                options={Categorias}
                size='small'
                sx={{
                    width: '40%',
                    color: 'currentColor',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '40px',
                        '& fieldset': {
                            bordercolor: 'currentColor',
                            borderRadius: '40px',
                        },
                        '&:hover fieldset': {
                            bordercolor: 'currentColor',
                            color: 'currentColor',
                        },
                        '&.Mui-focused fieldset': {
                            bordercolor: 'currentColor',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'currentColor',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'currentColor',
                    },
                    '& .MuiInputBase-input': {
                        color: 'currentColor',
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        display: 'none',
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                        color: 'currentColor',
                    }
                    
                }}
                renderInput={(params) => <TextField {...params} label="Categoría" />}
            /> 
            <Autocomplete
                disablePortal
                options={Marcas}
                size='small'
                sx={{
                    width: '40%',
                    color: 'currentColor',
                    borderRadius: '40px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '40px',
                        '& fieldset': {
                            bordercolor: 'currentColor',
                            borderRadius: '40px',
                        },
                        '&:hover fieldset': {
                            bordercolor: 'currentColor',
                        },
                        '&.Mui-focused fieldset': {
                            bordercolor: 'currentColor',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: 'currentColor',
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: 'currentColor',
                    },
                    '& .MuiInputBase-input': {
                        color: 'currentColor',
                    },
                    '& .MuiAutocomplete-popupIndicator': {
                        color: 'currentColor',
                    },
                    '& .MuiAutocomplete-clearIndicator': {
                        color: 'currentColor',
                    }
                }}
                renderInput={(params) => <TextField {...params} label="Marca" />}
            />
            <Button  variant='contained' sx={{ borderRadius: '40px', color: 'currentColor', backgroundColor: '#7e7d7d' }}>Filtrar</Button>
        </div>
    );
}
export default FiltroInventario;
