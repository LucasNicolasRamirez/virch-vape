import React, { useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productosData } from '../../Data/ProductosMock';
import { useCart } from "../ContextoCarrito/ContextoCarrito";
import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Card from '../CardProducto/CardProducto';
import styles from './ProductoSolo.module.css';
import { ArrowBack } from '@mui/icons-material';

function ProductoSolo() {
    const { id } = useParams();
    const navigate = useNavigate();
    const producto = productosData.find((prod) => prod.id === parseInt(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);


    if (!producto) {
        return <h2>Producto no encontrado.</h2>;
    }
    const handleAddToCart = () => {
        addToCart(producto, quantity);
    };

    const productosRelacionados = productosData
    .filter((prod) => prod.categoriaId === producto.categoriaId && prod.id !== producto.id)
    .slice(0, 5);

    return (
        <div>
            <div className={styles.headerContainer}>
                <ArrowBack
                    className={styles.backIcon} 
                    onClick={() => navigate(-1)} 
                    sx={{ fontSize: 40 }}
                />
            </div>
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
                        <p>Stock: {producto.stock} u.</p>
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
                        <Button variant="contained" onClick={handleAddToCart} disabled={producto.stock === 0}>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
            <Divider />
            <h2>Productos relacionados</h2>
            <div className={styles.grid}>
    {productosRelacionados.length > 0 ? (
        productosRelacionados.map((prod) => (
            <Card 
                key={prod.id} 
                id={prod.id} 
                nombre={prod.nombre} 
                precio={prod.precio} 
                stock={prod.stock} 
            />
        ))
    ) : (
        <p>No hay productos relacionados disponibles en esta categoría.</p>
    )}
</div>
        </div>
    );
}

export default ProductoSolo;
