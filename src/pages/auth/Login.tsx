import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isAuthenticated } from '../../services/authService';
import parkingEyesLogo from '../../assets/img/ParkingEyes1.png';
import { Car, Bell, BarChart } from "lucide-react";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      console.log("✅ Usuario autenticado, redirigiendo a /home");
      navigate('/home', { replace: true });
    }
  }, []); // Se ejecuta solo una vez

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      console.log("✅ Inicio de sesión exitoso, redirigiendo a /home");
      navigate('/home', { replace: true });
    } catch (err) {
      console.error("❌ Error al iniciar sesión:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc] p-4">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="bg-white rounded-3xl flex flex-col sm:flex-row overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          {/* Login Side */}
          <div className="flex-1 p-8 relative">
            <div className="text-center">
              <img src={parkingEyesLogo} alt="ParkingEyes Logo" className="w-[200px] h-auto inline-block" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="txt-usuario" className="block mb-2 text-sm text-gray-700">
                  Correo
                </label>
                <input
                  type="email"
                  id="txt-usuario"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#00A8E8] text-base"
                />
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="txt-pass" className="text-sm text-gray-700">
                    Contraseña
                  </label>
                  <a href="/resetear-contrasena" className="text-sm text-gray-500 hover:text-[#00A8E8]">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="txt-pass"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg outline-none focus:border-[#00A8E8] text-base"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    <i className={`fa fa-eye${showPassword ? '' : '-slash'}`}></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-3 bg-gradient-to-r from-black to-[#00A8E8] text-white rounded-lg font-semibold cursor-pointer transition-opacity hover:opacity-90 my-6 flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>

              <p className="text-center text-sm text-gray-500">
                ¿No tienes cuenta?{' '}
                <a href="" className="text-gray-700 font-semibold hover:text-[#00A8E8]">
                  Regístrate
                </a>
              </p>
            </form>
          </div>

          {/* Promo Side - Mejorado con Lucide-React */}
          <div className="hidden sm:flex flex-1 bg-gradient-to-br from-black to-[#00A8E8] p-10 flex-col justify-center text-white relative">
            {/* Efecto de fondo */}
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h1 className="text-4xl font-extrabold mb-6 leading-tight text-white animate-fade-in">
                Optimiza Tu <span className="text-[#00A8E8]">Estacionamiento</span>
              </h1>
              
              <p className="text-lg leading-relaxed mb-4 opacity-90">
                Sistema inteligente de monitoreo con visión computarizada para detectar espacios disponibles y ocupados en tiempo real.
              </p>

              {/* Beneficios con iconos de Lucide-React */}
              <ul className="space-y-4 text-lg opacity-90">
                <li className="flex items-center">
                  <Car className="w-6 h-6 mr-3 text-[#00A8E8]" />
                  Detección automática de espacios
                </li>
                <li className="flex items-center">
                  <Bell className="w-6 h-6 mr-3 text-[#00A8E8]" />
                  Notificaciones en tiempo real
                </li>
                <li className="flex items-center">
                  <BarChart className="w-6 h-6 mr-3 text-[#00A8E8]" />
                  Reportes detallados
                </li>
              </ul>

              {/* Botón CTA */}
              <a href="/" className="mt-6 inline-block bg-[#00A8E8] text-black font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-white">
                Más información
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
