import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/home/Home';
import Estadistic from './pages/estadistic/Estadistic';
import MapaPage from './pages/mapa/MapaPage';
import Users from './pages/database/Users';
import ConfiguracionPage from './pages/configuracion/ConfiguracionPage';
import Login from './pages/auth/Login';
import UserProfile from './pages/configuracion/DataUser';
import EnhancedStatistics from './pages/estadistic/Estadistic';
import StatisticsHistory from './pages/estadistic/Historial';
import StatisticsReports from './pages/estadistic/ReportesEstadisticas';
import Placas from './pages/database/Placa';
import { isAuthenticated } from './services/authService';
import { useIsMobile } from './hooks/useIsMobile';
import { ThemeProvider } from './contexts/ThemeContext';
import LandingPage from './components/LandingPage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [auth, setAuth] = useState(isAuthenticated());
  const isMobile = useIsMobile();

  useEffect(() => {
    setAuth(isAuthenticated());
  }, [location]);

  const isLoginPage = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-gray-50">
      {!isLoginPage && auth && (
        <>
          <Header isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
          <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
          <div 
            className={`mt-16 ${
              !isMobile 
                ? `transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-0'}`
                : ''
            }`}
          >
            <main>
              {children}
            </main>
          </div>
        </>
      )}
      {(isLoginPage || !auth) && children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>

      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            {/* TEMPORAL: Rutas sin verificación de autenticación */}
            <Route path="/home" element={<Home />} />
            <Route path="/estadisticas" element={<Estadistic />} />
            <Route path="/estadisticas/graficos" element={<EnhancedStatistics />} />
            <Route path="/estadisticas/Historial" element={<StatisticsHistory />} />
            <Route path="/estadisticas/Reportes" element={<StatisticsReports />} />
            <Route path="/mapa" element={<MapaPage />} />
            <Route path="/database/usuarios" element={<Users />} />
            <Route path="/database/placas" element={<Placas />} />
            <Route path="/configuracion" element={<ConfiguracionPage />} />
            <Route path="/configuracion/usuario" element={<UserProfile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
