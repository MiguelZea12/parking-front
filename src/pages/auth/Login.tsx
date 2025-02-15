import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/home');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafbfc] p-4">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="bg-white rounded-3xl flex overflow-visible shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
          {/* Login Side */}
          <div className="flex-1 p-8 relative">
            <div className="text-center">
              <img 
                src="/src/assets/ParkingEyes1.png" 
                alt="ParkingEyes Logo" 
                className="w-[200px] h-auto inline-block"
              />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="txt-usuario" className="block mb-2 text-sm text-gray-700">
                  Correo
                </label>
                <input
                  type="text"
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
                className="w-full py-3 px-3 bg-gradient-to-r from-black to-[#00A8E8] text-white rounded-lg font-semibold cursor-pointer transition-opacity hover:opacity-90 my-6"
              >
                Iniciar Sesión
              </button>

              <p className="text-center text-sm text-gray-500">
                ¿No tienes cuenta?{' '}
                <a href="" className="text-gray-700 font-semibold hover:text-[#00A8E8]">
                  Regístrate
                </a>
              </p>
            </form>
          </div>

          {/* Promo Side */}
          <div className="flex-1 bg-gradient-to-br from-black to-[#00A8E8] p-8 flex flex-col justify-center text-white relative">
            <h1 className="text-3xl font-bold mb-6 leading-tight">
              OPTIMIZA TU ESTACIONAMIENTO
            </h1>
            <p className="text-lg leading-relaxed mb-4 opacity-90">
              Sistema inteligente de monitoreo que utiliza visión computarizada para 
              identificar espacios disponibles y ocupados en tiempo real.
            </p>
            <ul className="space-y-4 text-lg opacity-90">
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Detección automática de espacios
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Notificaciones en tiempo real
              </li>
              <li className="flex items-center">
                <span className="mr-2">•</span>
                Reportes detallados
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;