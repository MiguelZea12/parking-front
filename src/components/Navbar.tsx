import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold ${
              isScrolled ? 'text-parking-blue' : 'text-white'
            }`}>
              ParkingEyes
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink isScrolled={isScrolled} href="#inicio">Inicio</NavLink>
              <NavLink isScrolled={isScrolled} href="#caracteristicas">Características</NavLink>
              <NavLink isScrolled={isScrolled} href="#beneficios">Beneficios</NavLink>
              <NavLink isScrolled={isScrolled} href="#nosotros">Nosotros</NavLink>
              <button
                onClick={() => navigate('/login')}
                className="px-4 py-2 rounded-full bg-parking-blue text-white hover:bg-blue-600 transition-all transform hover:scale-105"
              >
                Iniciar Sesión
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-parking-blue' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-white shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink href="#inicio">Inicio</MobileNavLink>
          <MobileNavLink href="#caracteristicas">Características</MobileNavLink>
          <MobileNavLink href="#beneficios">Beneficios</MobileNavLink>
          <MobileNavLink href="#nosotros">Nosotros</MobileNavLink>
          <button
            onClick={() => navigate('/login')}
            className="w-full text-left block px-3 py-2 text-base font-medium text-parking-blue hover:bg-gray-100 rounded-md"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ isScrolled, href, children }: { isScrolled: boolean; href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
      isScrolled 
        ? 'text-gray-700 hover:text-parking-blue' 
        : 'text-white hover:text-parking-blue'
    }`}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-parking-blue hover:bg-gray-100"
  >
    {children}
  </a>
);

export default Navbar; 