import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from '../FiltroCategorias/FiltroCategorias.module.css';
import { productosData } from '../../Data/ProductosMock';


function FiltroInventario({onFiltrar}) {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
    const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
    const [nombreProducto, setNombreProducto] = useState('');
    const [marcasFiltradas, setMarcasFiltradas] = useState([]); 


    const Categorias = [...new Set(productosData.map((producto) => producto.categoriaId))].map((categoria) => ({ label: categoria }));

   
    useEffect(() => {
        if (categoriaSeleccionada) {
            const marcas = productosData
                .filter((producto) => producto.categoriaId === categoriaSeleccionada.label)
                .map((producto) => producto.marca);
            setMarcasFiltradas([...new Set(marcas)].map((marca) => ({ label: marca }))); 
        } else {
            
            const todasLasMarcas = [...new Set(productosData.map((producto) => producto.marca))];
            setMarcasFiltradas(todasLasMarcas.map((marca) => ({ label: marca })));
        }
    }, [categoriaSeleccionada]);

    useEffect(() => {
        onFiltrar({
            categoria: categoriaSeleccionada?.label || '',
            marca: marcaSeleccionada?.label || '',
            nombre: nombreProducto.trim().toLowerCase(),
        });
    }, [categoriaSeleccionada, marcaSeleccionada, nombreProducto, onFiltrar]);

    return (
        <div className={styles.container}>
            {/* Buscar por nombre */}
            <TextField
                id="buscarProducto"
                name='buscarProducto'
                label="Buscar producto"
                variant="outlined"
                size='small'
                value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}
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

            {/* Filtrar por categoría */}
            <Autocomplete
                disablePortal
                options={Categorias}
                size='small'
                value={categoriaSeleccionada}
                onChange={(_, newValue) => setCategoriaSeleccionada(newValue)}

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

                renderInput={(params) => <TextField {...params} label="Categoría" />}
            />

            {/* Filtrar por marca */}
            <Autocomplete
                disablePortal
                options={marcasFiltradas}
                size='small'
                value={marcaSeleccionada}
                onChange={(_, newValue) => setMarcaSeleccionada(newValue)}
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
  
        </div>
    );
}
export default FiltroInventario;
