import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
            <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/login" />} />
            <Route path="/estadisticas" element={isAuthenticated() ? <Estadistic /> : <Navigate to="/login" />} />
            <Route path="/estadisticas/graficos" element={isAuthenticated() ? <EnhancedStatistics /> : <Navigate to="/login" />} />
            <Route path="/estadisticas/Historial" element={isAuthenticated() ? <StatisticsHistory /> : <Navigate to="/login" />} />
            <Route path="/estadisticas/Reportes" element={isAuthenticated() ? <StatisticsReports /> : <Navigate to="/login" />} />
            <Route path="/mapa" element={isAuthenticated() ? <MapaPage /> : <Navigate to="/login" />} />
            <Route path="/database/usuarios" element={isAuthenticated() ? <Users /> : <Navigate to="/login" />} />
            <Route path="/database/placas" element={isAuthenticated() ? <Placas /> : <Navigate to="/login" />} />
            <Route path="/configuracion" element={isAuthenticated() ? <ConfiguracionPage /> : <Navigate to="/login" />} />
            <Route path="/configuracion/usuario" element={isAuthenticated() ? <UserProfile /> : <Navigate to="/login" />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
