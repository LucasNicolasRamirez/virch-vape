import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Modal, InputLabel } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from "../FormInventario/FormInventario.module.css";


function FormEditInv() {
    const [open, setOpen] = useState(false);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [mostrarNicotina, setMostrarNicotina] = useState(false);
    const [nicotinaSeleccionada, setNicotinaSeleccionada] = useState('');
    const [mostrarTamanos, setMostrarTamanos] = useState(false);
    const [tamanoSeleccionado, setTamanoSeleccionado] = useState('');
    const [archivoSeleccionado, setArchivoSeleccionado] = useState('');
    const [imagenPreview, setImagenPreview] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setImagenPreview(null);
    };

    const handleCategorySelect = (categoria) => {
        setCategoriaSeleccionada(categoria);

        const categoriasConNicotina = ["liquidos", "sales"];
        setMostrarNicotina(categoriasConNicotina.includes(categoria));

        const categoriasConTamanos = ["liquidos", "sales"];
        setMostrarTamanos(categoriasConTamanos.includes(categoria));
    };

    const handleArchivoChange = (e) => {
        const archivo = e.target.files[0];
        if (archivo) {
            setArchivoSeleccionado(archivo.name);
            setImagenPreview(URL.createObjectURL(archivo));
        } else {
            setArchivoSeleccionado('');
            setImagenPreview(null);
        }
    };


    return (
        <>
            <Button
                size="small"
                color="primary"
                onClick={handleOpen}
                sx={{
                    borderRadius: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                }}
            >
                Editar
            </Button>

            <Modal open={open} onClose={handleClose} >
                <Box
                    className={styles.scrollable}
                    sx={{
                        '@media (min-width: 768px)': {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            margin: 0,
                            width: '90%',
                            maxWidth: 800
                        },
                        '@media (max-width: 480px)': {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            margin: 0,
                            width: '85%',
                            maxWidth: 800
                        },
                        padding: 1,
                        backgroundColor: "#1c1c1c",
                        borderRadius: 4,
                        border: "1px solid #fff",
                        color: "#fff",
                        boxSizing: 'border-box'
                    }}
                >
                    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2, borderBottom: "1px solid #FFF", }}>
                        EDITANDO PRODUCTO...
                    </Typography>


                    <form>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}>
                            <TextField
                                id="marca"
                                name='marca'
                                fullWidth
                                label="Marca del producto"
                                sx={{
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                            <TextField
                                id="nombre"
                                name='nombre'
                                fullWidth
                                label="Nombre del producto"
                                sx={{
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                            <TextField
                                id="categoria"
                                name='categoria'
                                select
                                fullWidth
                                label="Categoría"
                                value={categoriaSeleccionada}
                                onChange={(e) => {
                                    setCategoriaSeleccionada(e.target.value);
                                    handleCategorySelect(e.target.value);
                                }}
                                sx={{
                                    color: "#fff",
                                    "& .MuiSelect-icon": { color: "#fff" },
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            >
                                <MenuItem value="">Seleccione una categoría</MenuItem>
                                <MenuItem value="liquidos">Liquidos</MenuItem>
                                <MenuItem value="sales">Sales</MenuItem>
                                <MenuItem value="pods_descartables">Pods Descartables</MenuItem>
                                <MenuItem value="pods_recargables">Pods Recargables</MenuItem>
                                <MenuItem value="kits_inicio">Kits de inicio</MenuItem>
                                <MenuItem value="kits_avanzados">Kits avanzados</MenuItem>
                                <MenuItem value="mods">Mods</MenuItem>
                                <MenuItem value="atomizadores">Atomizadores</MenuItem>
                                <MenuItem value="baterias">Baterías</MenuItem>
                                <MenuItem value="cargadores">Cargadores</MenuItem>
                                <MenuItem value="consumibles">Consumibles</MenuItem>
                                <MenuItem value="accesorios">Accesorios</MenuItem>
                                <MenuItem value="otros">Otros</MenuItem>
                            </TextField>

                            {mostrarNicotina && (
                                <TextField
                                    id="nicotina"
                                    name="nicotina"
                                    select
                                    fullWidth
                                    label="Porcentaje de nicotina"
                                    value={nicotinaSeleccionada}
                                    onChange={(e) => setNicotinaSeleccionada(e.target.value)}
                                    sx={{
                                        color: "#fff",
                                        "& .MuiSelect-icon": { color: "#fff" },
                                        "& .MuiInputBase-input": { color: "#fff" },
                                        "& .MuiFormLabel-root": { color: "#fff" },
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#2c2c2c",
                                            borderRadius: "10px",
                                        },
                                    }}
                                >
                                    <MenuItem value="0">0 mg</MenuItem>
                                    <MenuItem value="3">3 mg</MenuItem>
                                    <MenuItem value="6">6 mg</MenuItem>
                                    <MenuItem value="12">12 mg</MenuItem>
                                    <MenuItem value="25">25 mg</MenuItem>
                                    <MenuItem value="35">35 mg</MenuItem>
                                </TextField>
                            )}

                            {mostrarTamanos && (
                                <TextField
                                    id="tamano"
                                    name="tamano"
                                    select
                                    fullWidth
                                    label="Tamaño del producto"
                                    value={tamanoSeleccionado}
                                    onChange={(e) => setTamanoSeleccionado(e.target.value)}
                                    sx={{
                                        color: "#fff",
                                        "& .MuiSelect-icon": { color: "#fff" },
                                        "& .MuiInputBase-input": { color: "#fff" },
                                        "& .MuiFormLabel-root": { color: "#fff" },
                                        "& .MuiOutlinedInput-root": {
                                            backgroundColor: "#2c2c2c",
                                            borderRadius: "10px",
                                        },
                                    }}
                                >
                                    <MenuItem value="30">30 ml</MenuItem>
                                    <MenuItem value="60">60 ml</MenuItem>
                                    <MenuItem value="100">100 ml</MenuItem>
                                    <MenuItem value="120">120 ml</MenuItem>
                                </TextField>
                            )}

                            <TextField
                                id="precio"
                                name='precio'
                                fullWidth
                                label="Precio del producto"
                                type="number"
                                sx={{
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                            <TextField
                                id="cantidad"
                                name='cantidad'
                                fullWidth
                                label="Cantidad"
                                type="number"
                                sx={{
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />


                            <Box sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "#2c2c2c", padding: 1, borderRadius: "10px" }}>

                                <input
                                    id="imagen"
                                    name="imagen"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={handleArchivoChange}
                                />
                                <label htmlFor="imagen">
                                    <Button
                                        variant="contained"
                                        component="span"
                                        sx={{
                                            backgroundColor: "#2A7AE4",
                                            color: "#fff",
                                            borderRadius: "10px",
                                            padding: "10px 20px",
                                            "&:hover": { backgroundColor: "#5595E9" },
                                        }}
                                    >
                                        Subir Imagen del producto
                                    </Button>
                                </label>
                                {archivoSeleccionado && (
                                    <Typography sx={{ color: "#fff", fontSize: "0.9rem" }}>
                                        {archivoSeleccionado}
                                    </Typography>
                                )}
                                {archivoSeleccionado && (
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#fff",
                                            borderColor: "#fff",
                                            borderRadius: "10px",
                                            padding: "5px 10px",
                                            "&:hover": { backgroundColor: "#ff4d4d", borderColor: "#ff4d4d" },
                                        }}
                                        onClick={() => {
                                            setArchivoSeleccionado('');
                                            setImagenPreview(null);
                                        }}
                                    >
                                        Eliminar imagen
                                    </Button>
                                )}
                            </Box>
                            {imagenPreview && (
                                <Box sx={{ marginTop: 2, textAlign: "center" }}>
                                    <Typography sx={{ color: "#fff", marginBottom: 1 }}>Vista previa:</Typography>
                                    <Box
                                        component="img"
                                        src={imagenPreview}
                                        alt="Vista previa"
                                        sx={{
                                            maxWidth: "100%",
                                            maxHeight: 200,
                                            borderRadius: "10px",
                                            border: "1px solid #fff",
                                        }}
                                    />
                                </Box>
                            )}

                            <TextField
                                id="descripcion"
                                name='descripcion'
                                fullWidth
                                label="Descripción del producto"
                                multiline
                                rows={8}
                                sx={{
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2 }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#2A7AE4",
                                        "&:hover": { backgroundColor: "#5595E9" }
                                    }}
                                >
                                    EDITAR
                                </Button>

                                <Button
                                    variant="outlined"
                                    sx={{ color: "#fff", borderColor: "#fff" }}
                                    onClick={handleClose}
                                >
                                    CANCELAR
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default FormEditInv;