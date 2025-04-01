import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem, Modal, InputLabel } from "@mui/material";
import { Add } from "@mui/icons-material";
import styles from "./FormInventario.module.css";

const categories = [
    { label: "Frontend", value: "frontEnd" },
    { label: "Backend", value: "backEnd" },
    { label: "Innovación y Gestión", value: "innovacionGestion" },
    { label: "UX/UI & Diseño", value: "uxUiDiseño" },
    { label: "DevOps", value: "devOps" },
    { label: "Mobile Development", value: "mobileDevelopment" },
    { label: "Data Science", value: "dataScience" },
    { label: "Otros", value: "otros" },
];

function FormInventario() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleCategorySelect = (categoria) => {
        setCategoriaSeleccionada(categoria);
    };
    const handleClose = () => setOpen(false);

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');



    return (
        <>
            <Button
                className={styles.button}
                sx={{ color: "currentColor", border: "1px solid currentColor", borderRadius: 10, width: 'fit-content' }}
                variant="outlined"
                startIcon={<Add />}
                onClick={handleOpen}
            >
                AGREGAR PRODUCTO
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
                        NUEVO PRODUCTO
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


                            <TextField
                                id="imagen"
                                name='imagen'
                                fullWidth
                                label="Imagen del producto"
                                type="file"
                                
                                sx={{
                                    ":active": { color: "#fff" },
                                    "& .MuiInputBase-input": { color: "#fff" },
                                    "& .MuiFormLabel-root": { color: "#fff" },
                                    "& .MuiOutlinedInput-root": {
                                        backgroundColor: "#2c2c2c",
                                        borderRadius: "10px",
                                    },
                                }}
                            />

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
                                    //   type="submit" 
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#2A7AE4",
                                        "&:hover": { backgroundColor: "#5595E9" }
                                    }}
                                >
                                    AGREGAR PRODUCTO
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

export default FormInventario;