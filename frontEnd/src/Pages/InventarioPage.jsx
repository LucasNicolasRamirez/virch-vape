import React, { useState, useEffect, useCallback } from 'react';
import { Fade } from '@mui/material';
import CardInventario from '../Components/ControlDeInventario/Inventario';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormInventario from '../Components/FormInventario/FormInventario';
import FiltroInventario from '../Components/FiltroInventario/FiltroInventario';
import { productosData } from '../Data/ProductosMock';
import ListaStock from '../Components/ListaStock/ListaStock';

function Inventario() {
    const [productosPorCategoria, setProductosPorCategoria] = useState({});

    useEffect(() => {
        const agrupados = productosData.reduce((acc, producto) => {
            const { categoriaId } = producto;
            if (!acc[categoriaId]) acc[categoriaId] = [];
            acc[categoriaId].push(producto);
            return acc;
        }, {});
        setProductosPorCategoria(agrupados);
    }, []);

    const handleFiltrar = useCallback((filtros) => {
        const { categoria, marca, nombre } = filtros;


        if (!categoria && !marca && !nombre) {
            const agrupados = productosData.reduce((acc, producto) => {
                const { categoriaId } = producto;
                if (!acc[categoriaId]) acc[categoriaId] = [];
                acc[categoriaId].push(producto);
                return acc;
            }, {});
            setProductosPorCategoria(agrupados);
            return;
        }


        const productosFiltrados = productosData.filter((producto) => {
            return (
                (!categoria || producto.categoriaId === categoria) &&
                (!marca || producto.marca === marca) &&
                (!nombre || producto.nombre.toLowerCase().includes(nombre))
            );
        });


        const agrupados = productosFiltrados.reduce((acc, producto) => {
            const { categoriaId } = producto;
            if (!acc[categoriaId]) acc[categoriaId] = [];
            acc[categoriaId].push(producto);
            return acc;
        }, {});

        setProductosPorCategoria(agrupados);
    }, []);


    return (
        <div className={styles.cuerpo}>
            <Fade in={true} timeout={600}>
                <div className={styles.contenido}>
                    <FormInventario />
                    <FiltroInventario onFiltrar={handleFiltrar} />
                    <ListaStock />
                    <div className={styles.contenidoInventario}>
                        {Object.keys(productosPorCategoria).map((categoriaId) => (
                            <div key={categoriaId} className={styles.categoria}>
                                <h3 className={styles.tituloCategoria} >{categoriaId.toUpperCase()}</h3>
                                <div className={styles.productos}>
                                    {productosPorCategoria[categoriaId].map((producto) => (
                                        <CardInventario key={producto.id} producto={producto} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Inventario;