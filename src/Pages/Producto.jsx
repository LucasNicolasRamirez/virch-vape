import React from 'react';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import { Button, Divider } from '@mui/material';
import Card from '../Components/CardProducto/CardProducto';
import prod3 from '../assets/imagenes/prod3.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';



function Producto() {


    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido} >

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '70%',
                    height: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: 'auto',
                    marginTop: '30px',
                    marginBottom: '30px',
                    borderRadius: '10px',
                    padding: '20px',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',

                }} >
                    <img src={prod3} alt="imagen producto" style={{ width: '40%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        height: '100%',
                        justifyContent: 'space-between',
                        marginTop: '30px',
                        marginBottom: '30px'
                    }}>
                        <h2>Nombre producto</h2>
                        <p>Marca producto</p>
                        <p>descripcion producto : Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis odit nihil accusamus consequuntur vero eligendi vel sit nulla, pariatur nisi labore harum consectetur, illum asperiores aspernatur hic, dolorum ab numquam.</p>

                        <p>$ precio producto</p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            height: '100%',
                            gap: '20px',
                            alignItems: 'center',
                            marginTop: '30px',
                            marginBottom: '30px'
                        }}>
                            <p>Cantidad:</p>
                            <Box sx={{ minWidth: 80, color: 'currentColor' }}>
                                <FormControl fullWidth sx={{ color: 'inherit' }}>
                                    <NativeSelect
                                        defaultValue={1}
                                        inputProps={{
                                            name: 'cantidad',
                                        }}
                                        sx={{
                                            color: 'inherit',
                                            '&:before': { borderColor: 'currentColor' },
                                            '&:after': { borderColor: 'currentColor' },
                                            '& .MuiNativeSelect-icon': {
                                                color: 'currentColor',
                                            },

                                        }}
                                    >
                                        <option style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }} value={1}>1</option>
                                        <option style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }} value={2}>2</option>
                                        <option style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }} value={3}>3</option>
                                        <option style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }} value={4}>4</option>
                                        <option style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", }} value={5}>5</option>

                                    </NativeSelect>
                                </FormControl>
                            </Box>



                            <Button variant="contained" >Agregar al carrito</Button>
                        </div>
                    </div>
                </div>
                <Divider />

                <h2>Productos relacionados</h2>
                <div className={styles.grid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>

            </div>
        </div>
    );
}

export default Producto;