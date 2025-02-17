import React, { useState } from 'react';
import { Menu, X, LogOut, ChevronDown } from 'lucide-react';
import { logout } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import parkingEyesLogo from '../assets/img/ParkingEyes1.png';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import parkingEyesLogoDark from '../assets/img/ParkingEyes1-dark.png';

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, onToggle }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const userName = user?.username || 'Usuario';

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-dark-bg-secondary border-b border-gray-200 dark:border-gray-700 shadow-md z-40 transition-colors duration-200">
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo y botón de menú */}
        <div className="flex items-center gap-4">
          <img 
            src={isDarkMode ? parkingEyesLogoDark : parkingEyesLogo}
            alt="ParkingEyes Logo" 
            className="w-16 object-contain"
          />
          <button
            onClick={onToggle}
            className="p-2 text-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 
                     rounded-lg transition-colors"
          >
            {isOpen ? <X size={34} /> : <Menu size={34} />}
          </button>
        </div>

        {/* Controles de usuario */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 
                     hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 
                     transition-colors"
          >
            {isDarkMode ? (
              <Sun size={20} className="text-parking-blue" />
            ) : (
              <Moon size={20} />
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg
                       hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 
                       transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-parking-gradient 
                             text-white flex items-center justify-center font-semibold">
                  {getInitials(userName)}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden md:block">
                  {userName}
                </span>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 dark:text-gray-400 transition-transform duration-200 
                         hidden md:block ${isUserMenuOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isUserMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsUserMenuOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-bg-tertiary 
                             rounded-lg shadow-lg py-1 z-50 transition-colors duration-200">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {userName}
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 
                             hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 
                             flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={16} />
                    Cerrar sesión
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;