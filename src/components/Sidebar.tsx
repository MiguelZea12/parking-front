import React, { useState } from 'react';
import { Home, ChartBar, Database, Settings, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isMobile = useIsMobile();

  // Estado para manejar submódulos desplegables
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({
    estadisticas: false,
  });

  // Función para alternar submódulos
  const toggleExpand = (module: string) => {
    setExpanded((prev) => ({
      ...prev,
      [module]: !prev[module],
    }));
  };

  const menuItems = [
    { icon: <Home size={20} />, text: 'Inicio', path: '/home' },
    {
      icon: <ChartBar size={20} />,
      text: 'Estadísticas',
      path: '/estadisticas',
      subModules: [
        { text: 'Gráficos', path: '/estadisticas/graficos' },
        { text: 'Historial', path: '/estadisticas/historial' },
        { text: 'Reportes', path: '/estadisticas/reportes' },
      ],
    },
    {
      icon: <Database size={20} />,
      text: 'Base de Datos',
      path: '/database',
      subModules: [
        { text: 'Usuarios', path: '/database/usuarios' },
        { text: 'Placas', path: '/database/placas' },
      ],
    },
    
    {
      icon: <Settings size={20} />,
      text: 'Configuración',
      path: '/configuracion',
      subModules: [
        { text: 'Usuario', path: '/configuracion/usuario' },
        { text: 'Cámaras', path: '/configuracion/camaras' },
        { text: 'Sistema', path: '/configuracion/sistema' },
      ],
    },
  ];

  return (
    <div
      className={`fixed top-16 left-0 h-[calc(100vh-64px)] w-64 
                bg-white dark:bg-dark-bg-secondary border-r border-gray-200 
                dark:border-gray-700 shadow-lg z-30 
                ${!isMobile 
                  ? `transition-transform duration-300 ease-in-out 
                     ${isOpen ? 'translate-x-0' : '-translate-x-full'}` 
                  : isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-colors duration-200`}
    >
      <nav className="flex flex-col h-full py-4">
        {menuItems.map((item, index) => (
          <div key={index} className="w-full">
            {!item.subModules ? (
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 
                          text-gray-700 dark:text-gray-200
                          ${location.pathname === item.path 
                            ? 'bg-parking-gradient text-white' 
                            : 'hover:text-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 transition-colors duration-200'
                          }`}
                onClick={() => {
                  if (isMobile) onClose();
                }}
              >
                <span className="w-6 h-6 mr-3">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </Link>
            ) : (
              <div>
                {/* Módulo con submódulos */}
                <button
                  className="flex items-center w-full px-6 py-3 
                             text-gray-700 dark:text-gray-200 
                             hover:text-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 
                             transition-colors duration-200"
                  onClick={() => toggleExpand(item.text.toLowerCase())}
                >
                  <span className="w-6 h-6 mr-3">{item.icon}</span>
                  <span className="font-medium flex-1 text-left">{item.text}</span>
                  {expanded[item.text.toLowerCase()] ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {/* Submódulos desplegables */}
                {expanded[item.text.toLowerCase()] && (
                  <div className="ml-9 border-l border-gray-300 dark:border-gray-600">
                    {item.subModules.map((sub, subIndex) => (
                      <Link
                        key={subIndex}
                        to={sub.path}
                        className={`block px-6 py-2 text-gray-600 dark:text-gray-400
                                   ${location.pathname === sub.path 
                                      ? 'bg-parking-gradient text-white' 
                                      : 'hover:text-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20'
                                    } transition-colors duration-200`}
                        onClick={() => {
                          if (isMobile) onClose();
                        }}
                      >
                        {sub.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
