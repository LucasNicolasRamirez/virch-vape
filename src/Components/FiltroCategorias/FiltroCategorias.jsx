import  React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Button } from '@mui/material';
import styles from './FiltroCategorias.module.css';

const Marcas = [
    { label: 'MVH' },
    { label: 'EVIL' },
    { label: 'DUST' },
    { label: 'SHIBUMI' },
    { label: 'ONE' },
    { label: 'SMOK' },
    { label: 'VOOPOO' },
    { label: 'VAPORESSO' },
    { label: 'MAD CAKE' },
    { label: 'ZOMO' }
];



function FiltroCat() {
    return (
        <div className={styles.container}>
            <TextField
                id="buscarProducto"
                name='buscarProducto'
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
            <Button variant='contained' sx={{ borderRadius: '40px', color: 'currentColor', backgroundColor: '#7e7d7d' }}>Filtrar</Button>
        </div>
    );
}
export default FiltroCat;
