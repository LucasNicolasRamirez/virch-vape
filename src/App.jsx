import 'normalize.css'
import './App.css'
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/HomePage';
import Productos from './Pages/ProductosPage';
import ContactoPage from './Pages/ContactoPage';
import IniciarSesion from './Pages/IniciarSesion';
import PerfilUser from './Pages/PerfilUser';
import Producto from './Pages/Producto';
import { ProveedorTema } from '../src/Components/ContextoTema/ContextoTema';
import Carrito from './Pages/Carrito';
import Loader from './Components/Loader/Loader';
import VirchVapeLoader from './Components/VirchVapeLoader/VirchVapeLoader';
import Inventario from './Pages/InventarioPage';

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
      <>
          <Header />
          <div className='fondo'>
              {loading ? <Loader /> : (
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/productos' element={<Productos />} />
                      <Route path='/productos/:categoria' element={<Productos />} />
                      <Route path='/contacto' element={<ContactoPage />} />
                      <Route path='/iniciar-sesion' element={<IniciarSesion />} />
                      <Route path='/perfil' element={<PerfilUser />} />
                      <Route path='/producto' element={<Producto />} />
                      <Route path='/carrito' element={<Carrito />} />
                      <Route path='/inventario' element={<Inventario />} />
                  </Routes>
              )}
          <Footer />
          </div>
      </>
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