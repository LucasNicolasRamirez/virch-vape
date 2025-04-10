import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { productosData } from '../../Data/ProductosMock';
import { useCart } from "../ContextoCarrito/ContextoCarrito";
import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Card from '../CardProducto/CardProducto';
import styles from './ProductoSolo.module.css';

function ProductoSolo() {
    const { id } = useParams();
    const producto = productosData.find((prod) => prod.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    if (!producto) {
        return <h2>Producto no encontrado.</h2>;
    }
    const handleAddToCart = () => {
        addToCart(producto, quantity);
    };



    return (
        <div>
            <div className={styles.productContainer}>
                <img src={producto.imagen} alt={producto.nombre} className={styles.productImage} />
                <div className={styles.productDetails}>
                    <h3>{producto.marca}</h3>
                    <h2>{producto.nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <div className={styles.priceContainer}>
                        <p>Precio por unidad:</p>
                        <p className={styles.precio}> ${producto.precio}</p>
                    </div>
                    <div className={styles.quantityContainer}>
                        <p>Cantidad:</p>
                        <Box sx={{ minWidth: 80, color: 'currentColor' }}>
                            <FormControl fullWidth sx={{ color: 'inherit' }}>
                                <NativeSelect
                                    value={quantity}
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                    inputProps={{ name: "cantidad" }}
                                    sx={{
                                        color: 'inherit',
                                        '&:before': { borderColor: 'currentColor' },
                                        '&:after': { borderColor: 'currentColor' },
                                        '& .MuiNativeSelect-icon': { color: 'currentColor' },
                                    }}
                                >
                                    {[...Array(Math.min(producto.stock, 10)).keys()].map((num) => (
                                        <option className={styles.option} key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </NativeSelect>
                            </FormControl>
                        </Box>
                        <Button variant="contained" onClick={handleAddToCart}>Agregar al carrito</Button>
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
    );
}

export default ProductoSolo;
