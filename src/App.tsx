import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import Estadistic from './pages/estadistic/pages';
import MapaPage from './pages/mapa/MapaPage';
import ConfiguracionPage from './pages/configuracion/ConfiguracionPage';
import Login from './pages/auth/Login';
import { isAuthenticated } from '../services/authService';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    setAuth(isAuthenticated());
  }, [location]);

  const isLoginPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoginPage && auth && <Header isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />}
      {!isLoginPage && auth && <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />}
      <main className={auth && !isLoginPage ? "pt-16" : ""}>
        {children}
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />} />
          <Route path="/estadisticas" element={isAuthenticated() ? <Estadistic /> : <Navigate to="/" />} />
          <Route path="/mapa" element={isAuthenticated() ? <MapaPage /> : <Navigate to="/" />} />
          <Route path="/configuracion" element={isAuthenticated() ? <ConfiguracionPage /> : <Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
