import 'normalize.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProveedorTema } from '../src/Components/ContextoTema/ContextoTema';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/HomePage';
import ContactoPage from './Pages/ContactoPage';
import IniciarSesion from './Pages/IniciarSesion';
import PerfilUser from './Pages/PerfilUser';
import Carrito from './Pages/Carrito';
import Loader from './Components/Loader/Loader';
import VirchVapeLoader from './Components/VirchVapeLoader/VirchVapeLoader';
import Producto from './Pages/Producto';
import Inventario from './Pages/InventarioPage';
import styles from '../src/Components/Cuerpo/Cuerpo.module.css';
import './App.css';
import { ProductosPage } from './Pages/ProductosPage';
import VerificadorEdad from './Components/VerificadorEdad/VerificadorEdad';
import NotFound from './Components/NotFound/NotFound';

function AppContent() {
    const [loading, setLoading] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [pathname]);


    
    return (
        <div className={styles.cuerpo}>
            <Header />
            <div className='fondo'>
                {loading ? <Loader /> : (
                    <div className={styles.contenido}>
                        <VerificadorEdad />
                        <Routes>
                            <Route path="*" element={<NotFound />} />
                            <Route path='/' element={<Home />} />
                            <Route path='/productos/:id' element={<ProductosPage />} />
                            <Route path='/contacto' element={<ContactoPage />} />
                            <Route path='/iniciar-sesion' element={<IniciarSesion />} />
                            <Route path='/perfil' element={<PerfilUser />} />
                            <Route path='/producto/:id' element={<Producto />} />
                            <Route path='/carrito' element={<Carrito />} />
                            <Route path='/inventario' element={<Inventario />} />
                        </Routes>
                        <Footer />
                    </div>
                )}
            </div>
        </div>
    );
}

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <ProveedorTema>
            <Router>
                {loading ? <VirchVapeLoader /> : <AppContent />}
            </Router>
        </ProveedorTema>
    );
}

export default App;