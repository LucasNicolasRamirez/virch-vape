import React, { useState, useEffect, useCallback } from 'react';
import CardInventario from '../Components/ControlDeInventario/Inventario';
import styles from '../Components/Cuerpo/Cuerpo.module.css';
import FormInventario from '../Components/FormInventario/FormInventario';
import FiltroInventario from '../Components/FiltroInventario/FiltroInventario';
import { productosData } from '../Data/ProductosMock';

function Inventario() {
    const [productosPorCategoria, setProductosPorCategoria] = useState({}); // Estado para productos agrupados por categoría

    // Agrupar todos los productos por categoría al cargar el componente
    useEffect(() => {
        const agrupados = productosData.reduce((acc, producto) => {
            const { categoriaId } = producto;
            if (!acc[categoriaId]) acc[categoriaId] = [];
            acc[categoriaId].push(producto);
            return acc;
        }, {});
        setProductosPorCategoria(agrupados);
    }, []); // Solo se ejecuta al montar el componente

    const handleFiltrar = useCallback((filtros) => {
        const { categoria, marca, nombre } = filtros;

        // Si no se aplica ningún filtro, mostrar todos los productos agrupados por categoría
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

        // Filtrar productos según los criterios seleccionados
        const productosFiltrados = productosData.filter((producto) => {
            return (
                (!categoria || producto.categoriaId === categoria) &&
                (!marca || producto.marca === marca) &&
                (!nombre || producto.nombre.toLowerCase().includes(nombre))
            );
        });

        // Agrupar los productos filtrados por categoría
        const agrupados = productosFiltrados.reduce((acc, producto) => {
            const { categoriaId } = producto;
            if (!acc[categoriaId]) acc[categoriaId] = [];
            acc[categoriaId].push(producto);
            return acc;
        }, {});

        setProductosPorCategoria(agrupados); // Actualizar el estado con los productos agrupados
    }, []); // Memorizar la función para evitar que cambie en cada renderizado


    return (
        <div className={styles.cuerpo}>
            <div className={styles.contenido}>
                <FormInventario />
                <FiltroInventario onFiltrar={handleFiltrar} />
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
        </div>
    );
}

export default Inventario;