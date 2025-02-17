import React, { useState, useEffect } from 'react';
import { Menu, X, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Ajustado para mejor posicionamiento
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { 
      name: 'Inicio', 
      id: 'revolucion-estacionamiento'
    },
    { 
      name: 'Características', 
      id: 'caracteristicas'
    },
    { 
      name: 'Beneficios', 
      id: 'beneficios'
    },
    { 
      name: 'Tecnología', 
      id: 'technology-section'
    }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white py-5 shadow-md' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-8">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className={`text-xl font-bold tracking-wide transition-colors duration-300 flex items-center ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Parking
              {isScrolled ? (
                <Eye className="w-7 h-7 text-[#00A8E8] ml-0.5 -mt-0.6 animate-pulse" />
              ) : (
                <span className="text-white ml-0.5">Eyes</span>
              )}
            </span>
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-[13px] font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-[#00A8E8]' // Texto más oscuro y grueso
                    : 'text-white hover:text-white font-medium'
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Botón de inicio de sesión */}
            <button
              onClick={() => navigate('/login')}
              className={`px-5 py-1.5 text-[13px] font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-[#00A8E8] text-white hover:bg-[#0077A3] shadow-sm hover:shadow-md'
                  : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/30'
              }`}
            >
              Iniciar Sesión
            </button>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-1.5 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-600 hover:text-[#00A8E8]' : 'text-white hover:text-gray-200'
              }`}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable actualizado */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-4 py-3 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-3 py-2 text-[13px] font-semibold text-gray-800 hover:text-[#00A8E8] hover:bg-gray-50 rounded-md"
            >
              {item.name}
            </button>
          ))}
          <button 
            onClick={() => navigate('/login')}
            className="w-full mt-2 px-3 py-2 text-[13px] font-semibold text-white bg-[#00A8E8] hover:bg-[#0077A3] rounded-md transition-colors duration-300"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 