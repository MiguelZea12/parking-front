// src/components/Sidebar.tsx
import React from 'react';
import { Home, ChartBar, Map, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: <Home size={20} />, text: 'Inicio', path: '/' },
    { icon: <ChartBar size={20} />, text: 'Estadísticas', path: '/estadisticas' },
    { icon: <Map size={20} />, text: 'Mapa', path: '/mapa' },
    { icon: <Settings size={20} />, text: 'Configuración', path: '/configuracion' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={onClose}
          style={{ marginTop: '64px' }}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col h-full py-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                location.pathname === item.path ? 'bg-gray-100 text-blue-600' : ''
              }`}
              onClick={() => {
                if (window.innerWidth < 768) {
                  onClose();
                }
              }}
            >
              <span className="w-6 h-6 mr-3">{item.icon}</span>
              <span className="font-medium">{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;