import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import styles from './FiltroCategorias.module.css';
import { productosData } from '../../Data/ProductosMock';

function FiltroCat({ categoriaActual, onFiltrar }) {
    const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);
    const [nombreProducto, setNombreProducto] = useState('');
    const [marcasFiltradas, setMarcasFiltradas] = useState([]);
    const [nicotinaSeleccionada, setNicotinaSeleccionada] = useState(null);
    const [tamanoSeleccionado, setTamanoSeleccionado] = useState(null);
    const [nicotinasFiltradas, setNicotinasFiltradas] = useState([]);
    const [tamanosFiltrados, setTamanosFiltrados] = useState([]);
    const [mostrarCamposAdicionales, setMostrarCamposAdicionales] = useState(false);

    useEffect(() => {
        // Filtrar las marcas según la categoría seleccionada
        if (categoriaActual && categoriaActual !== 'todos-los-productos') {
            const marcas = productosData
                .filter((producto) => producto.categoriaId === categoriaActual)
                .map((producto) => producto.marca);
            setMarcasFiltradas([...new Set(marcas)].map((marca) => ({ label: marca })));

            // Filtrar tamaños y nicotinas solo para "Líquidos" o "Sales"
            if (categoriaActual === 'liquidos' || categoriaActual === 'sales') {
                const nicotinas = productosData
                    .filter((producto) => producto.categoriaId === categoriaActual)
                    .map((producto) => producto.nicotina);
                setNicotinasFiltradas([...new Set(nicotinas)].map((nic) => ({ label: nic })));

                const tamanos = productosData
                    .filter((producto) => producto.categoriaId === categoriaActual)
                    .map((producto) => producto.tamano);
                setTamanosFiltrados([...new Set(tamanos)].map((tam) => ({ label: tam })));
            } else {
                setNicotinasFiltradas([]);
                setTamanosFiltrados([]);
            }
        } else {
            // Si no hay categoría seleccionada, mostrar todas las marcas
            const todasLasMarcas = [...new Set(productosData.map((producto) => producto.marca))];
            setMarcasFiltradas(todasLasMarcas.map((marca) => ({ label: marca })));
            setNicotinasFiltradas([]);
            setTamanosFiltrados([]);
        }

        // Mostrar campos adicionales solo para "Líquidos" o "Sales"
        setMostrarCamposAdicionales(categoriaActual === 'liquidos' || categoriaActual === 'sales');
    }, [categoriaActual]);

    useEffect(() => {
        // Notificar al componente padre los filtros seleccionados
        const filtros = {
            categoria: categoriaActual || '',
            marca: marcaSeleccionada?.label || '',
            nombre: nombreProducto.trim().toLowerCase(),
            nicotina: nicotinaSeleccionada?.label || '',
            tamano: tamanoSeleccionado?.label || '',
        };
        onFiltrar(filtros);
    }, [categoriaActual, marcaSeleccionada, nombreProducto, nicotinaSeleccionada, tamanoSeleccionado]);

    return (
        <div className={styles.container}>
            <TextField
                id="buscarProducto"
                name="buscarProducto"
                label="Buscar producto"
                variant="outlined"
                size="small"
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
            <Autocomplete
                disablePortal
                options={marcasFiltradas}
                size="small"
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

            {/* Campos adicionales para "Líquidos" y "Sales" */}
            {mostrarCamposAdicionales && (
                <>
                    <Autocomplete
                        disablePortal
                        options={nicotinasFiltradas}
                        size="small"
                        value={nicotinaSeleccionada}
                        onChange={(_, newValue) => setNicotinaSeleccionada(newValue)}
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
                        renderInput={(params) => <TextField {...params} label="Nicotina" />}
                    />
                    <Autocomplete
                        disablePortal
                        options={tamanosFiltrados}
                        size="small"
                        value={tamanoSeleccionado}
                        onChange={(_, newValue) => setTamanoSeleccionado(newValue)}
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
                        renderInput={(params) => <TextField {...params} label="Tamaño" />}
                    />
                </>
            )}
        </div>
    );
}

export default FiltroCat;