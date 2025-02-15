import React, { useState } from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { logout } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, onToggle }) => {
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
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <div className="flex items-center justify-between h-16 px-4">
        <button
          onClick={onToggle}
          className="p-2 hover:bg-gray-100 bg-gray-300 rounded-lg transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold hover:bg-blue-700 transition-colors"
          >
            {getInitials(userName)}
          </button>

          {isUserMenuOpen && (
            <>
              {/* Overlay para cerrar el menú al hacer clic fuera */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsUserMenuOpen(false)}
              />

              {/* Menú desplegable */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">{userName}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Cerrar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;