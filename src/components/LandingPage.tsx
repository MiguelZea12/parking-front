import React, { useEffect } from 'react';
import { Eye, Car, Brain, Shield, ChartBar, Clock, Target, BarChart2 } from 'lucide-react';
import parkinpage from '../assets/img/parkinpage.png';
import parkingdown from '../assets/img/ParkingDown.png';
import Navbar from './Navbar';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';

// Definir interfaces para los props de los componentes
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

// Componentes auxiliares con tipos
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, features }) => (
  
  <div className="feature-card" data-aos="fade-up">
    <div className="flex flex-col items-center text-center h-full">
      <div className="icon-wrapper">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 text-left w-full mt-auto">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="w-2 h-2 bg-[#00A8E8] rounded-full mr-3 mt-2"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const StatBox: React.FC<{ endValue: number; suffix?: string; label: string }> = ({ endValue, suffix = '', label }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div ref={ref} className="stat-box">
      <div className="stat-number">
        {inView && (
          <CountUp
            end={endValue}
            duration={2.5}
            suffix={suffix}
            separator=","
          />
        )}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

// Agregar la sección de tecnología donde usaremos el componente
const TechnologySection: React.FC = () => (
  <section id="technology-section" className="py-32 bg-white relative overflow-hidden">
    <div className=" mx-auto max-w-7xl px-8">
      <div className="flex flex-col lg:flex-row gap-20">
        {/* Columna izquierda */}
        <div className="lg:w-2/5">
          <div className="sticky top-8">
            {/* Título más compacto */}
            <div className="mb-6"> {/* Reducido de mb-12 a mb-6 */}
              <h2 className="text-5xl font-bold leading-tight"> {/* Añadido leading-tight */}
                <span className="block text-gray-900 mb-2"> {/* Reducido de mb-4 a mb-2 */}
                  Tecnología
                </span>
                <span className="block text-gray-900 mb-2"> {/* Reducido de mb-4 a mb-2 */}
                  de
                </span>
                <span className="block text-[#00A8E8]"> {/* Quitado leading-relaxed */}
                  Vanguardia
                </span>
              </h2>
            </div>
            
            {/* Subtítulo más cercano */}
            <div className="overflow-hidden">
              <p className="text-lg text-gray-600 mt-2 leading-relaxed"> {/* Reducido text-xl a text-lg y mt-4 a mt-2 */}
                Utilizamos las últimas tecnologías para garantizar el mejor servicio
              </p>
            </div>

            {/* Imagen con efectos mejorados */}
            <div className="relative mt-16 group perspective-1000">
              <div className="relative transform transition-all duration-700 
                            group-hover:rotate-y-12 group-hover:scale-105">
                <img 
                  src={parkingdown}
                  alt="Tecnología ParkingEyes"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                />
                {/* Efecto de profundidad */}
                <div className="absolute inset-0 rounded-3xl shadow-inner-lg opacity-0 
                              group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              {/* Destellos decorativos */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-transparent 
                            rounded-full mix-blend-overlay filter blur-3xl opacity-0 group-hover:opacity-30 
                            transition-all duration-700 transform group-hover:scale-110"></div>
            </div>
          </div>
        </div>

        {/* Cards con mejor separación del fondo */}
        <div className="lg:w-3/5">
          <div className="flex flex-col space-y-8">
            {/* IA Avanzada */}
            <div className="group">
              <div className="p-8 bg-white/95 backdrop-blur-sm rounded-2xl 
                            shadow-lg hover:shadow-xl border-2 border-gray-100 
                            hover:border-[#00A8E8]/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A8E8]/10 to-blue-600/10 
                                  flex items-center justify-center transform transition-all duration-500 
                                  group-hover:scale-110 group-hover:rotate-6">
                      <Brain className="w-8 h-8 text-[#00A8E8] transform transition-transform" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A8E8] 
                                 transition-colors">
                      Inteligencia Artificial Avanzada
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Algoritmos de última generación para detección y análisis preciso de vehículos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Procesamiento en Tiempo Real */}
            <div className="group">
              <div className="p-8 bg-white/95 backdrop-blur-sm rounded-2xl 
                            shadow-lg hover:shadow-xl border-2 border-gray-100 
                            hover:border-[#00A8E8]/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A8E8]/10 to-blue-600/10 
                                  flex items-center justify-center transform transition-all duration-500 
                                  group-hover:scale-110 group-hover:rotate-6">
                      <Clock className="w-8 h-8 text-[#00A8E8] transform transition-transform" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A8E8] 
                                 transition-colors">
                      Procesamiento en Tiempo Real
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Respuesta instantánea y actualización continua de la información
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis Predictivo */}
            <div className="group">
              <div className="p-8 bg-white/95 backdrop-blur-sm rounded-2xl 
                            shadow-lg hover:shadow-xl border-2 border-gray-100 
                            hover:border-[#00A8E8]/30 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A8E8]/10 to-blue-600/10 
                                  flex items-center justify-center transform transition-all duration-500 
                                  group-hover:scale-110 group-hover:rotate-6">
                      <BarChart2 className="w-8 h-8 text-[#00A8E8] transform transition-transform" />
                    </div>
                  </div>
                  <div className="transform transition-all duration-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A8E8] 
                                 transition-colors">
                      Análisis Predictivo
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      Anticipación a situaciones y optimización proactiva del estacionamiento
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LandingPage: React.FC = () => {

  const navigate = useNavigate();
  useEffect(() => {
    // Animación suave al hacer clic en los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          target?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      });
    });

    // Animación al hacer scroll
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        
        if (isVisible) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verificar elementos visibles inicialmente

    const cards = document.querySelectorAll('.stat-card');
    let currentIndex = cards.length - 1; // Comenzamos desde la última card
    let autoplayInterval: NodeJS.Timeout | null = null;
    let isManualInteraction = false;
    let lastInteractedIndex = -1;

    const highlightCard = (index: number) => {
      cards.forEach((card, i) => {
        const cardElement = card as HTMLElement;
        if (i === index) {
          cardElement.style.transform = 'scale(1.1) translateY(-10px)';
          cardElement.style.zIndex = '20';
          cardElement.classList.add('active-card');
          cardElement.style.borderColor = 'rgba(0, 168, 232, 0.5)';
          cardElement.style.boxShadow = '0 10px 25px rgba(0, 168, 232, 0.2)';
        } else {
          cardElement.style.transform = 'scale(1) translateY(0)';
          cardElement.style.zIndex = '10';
          cardElement.classList.remove('active-card');
          cardElement.style.borderColor = 'rgba(107, 114, 128, 0.5)';
          cardElement.style.boxShadow = 'none';
        }
      });
    };

    // Función para iniciar la rotación automática
    const startAutoplay = (startIndex?: number) => {
      if (autoplayInterval) clearInterval(autoplayInterval);
      
      // Si se proporciona un índice de inicio, usarlo
      if (typeof startIndex === 'number') {
        currentIndex = startIndex;
      }

      autoplayInterval = setInterval(() => {
        // Rotación de derecha a izquierda
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        highlightCard(currentIndex);
      }, 3000);
    };

    // Función para detener la rotación automática
    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    };

    // Iniciar la rotación automática al cargar
    startAutoplay();

    // Manejo de interacción manual mejorado
    cards.forEach((card, index) => {
      card.addEventListener('mouseenter', () => {
        isManualInteraction = true;
        lastInteractedIndex = index;
        stopAutoplay();
        highlightCard(index);
      });

      card.addEventListener('mouseleave', () => {
        isManualInteraction = false;
        
        // Esperar un momento antes de reiniciar la rotación
        setTimeout(() => {
          if (!isManualInteraction) {
            // Si hubo interacción manual, comenzar desde el último índice interactuado
            if (lastInteractedIndex !== -1) {
              startAutoplay(lastInteractedIndex);
            } else {
              // Si no hubo interacción manual, continuar desde el índice actual
              startAutoplay(currentIndex);
            }
          }
        }, 500);
      });
    });

    // Limpiar al desmontar
    return () => {
      stopAutoplay();
    };
  }, []);

  return (
    <div className="bg-white">
      <Navbar />
      
      <section id="inicio" className="min-h-screen hero-section overflow-hidden bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-24 lg:py-32">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
            {/* Hero Content */}
            <div className="lg:w-1/2 space-y-6 lg:space-y-8 z-10 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight py-4 lg:py-10">
                  <span className="text-white block mb-1 lg:mb-2">ParkingEyes:</span>
                  <span className="text-white block mb-1 lg:mb-2">La Revolución</span>
                  <span className="text-white block mb-1 lg:mb-2">del</span>
                  <span className="text-[#00A8E8] block">
                    Estacionamiento<br />Inteligente
                  </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-100 leading-relaxed max-w-2xl mt-4 lg:mt-8 mx-auto lg:mx-0">
                  Sistema de monitoreo inteligente con IA para optimizar y asegurar espacios de 
                  estacionamiento. Revoluciona la forma de gestionar tu estacionamiento.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 pt-4 lg:pt-8">
                <button onClick={() => navigate('/login')}className="border-2 border-[#00A8E8] text-white px-8 py-3 rounded-lg hover:bg-[#00A8E8]/10 transition-colors w-full sm:w-auto">
                  Ver Demo
                </button>
              </div>
            </div>

            {/* Right  */}
            <div className="lg:w-1/2 flex flex-col space-y-8 mt-8 lg:mt-0">
              {/* Hero Image */}
              <div className="relative px-4 sm:px-0">
                <div className="relative z-10 transform hover:scale-105 transition-duration-500">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00A8E8] to-blue-600 rounded-3xl blur opacity-30"></div>
                  <img 
                    src={parkinpage} 
                    alt="AI Parking System" 
                    className="relative rounded-3xl shadow-2xl w-full h-auto max-w-full mx-auto object-cover"
                  />
                  {/* Light Effects */}
                  <div className="absolute -top-20 -right-20 w-48 sm:w-72 h-48 sm:h-72 bg-[#00A8E8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                  <div className="absolute -bottom-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-center w-full mt-8 lg:mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
                  <StatBox endValue={98} suffix="%" label="Precisión" />
                  <StatBox endValue={50} suffix="%" label="Ahorro de Tiempo" />
                  <StatBox endValue={24} suffix="/7" label="Monitoreo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full flex flex-col items-center mb-16 sm:mb-32">
            <div className="text-center max-w-2xl px-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
                Características
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00A8E8] mb-4 sm:mb-8">
                Principales
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 hover:text-gray-800 transition-colors">
                Descubre cómo ParkingEyes revoluciona la gestión de 
                estacionamientos con tecnología de vanguardia
              </p>
            </div>
          </div>
          
          {/* Feature Cards */}
          <div className="w-full flex justify-center -mt-8 sm:-mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 max-w-6xl px-4">
              <div className="animate-fade-in-up animation-delay-700 hover:transform hover:scale-105 transition-all duration-300">
                <FeatureCard 
                  icon={<Eye className="w-12 sm:w-16 h-12 sm:h-16 text-[#00A8E8] animate-pulse" />}
                  title="Monitoreo en Tiempo Real"
                  description="Visualización instantánea del estado de todos los espacios."
                  features={[
                    "Detección instantánea de vehículos",
                    "Alertas automáticas de ocupación",
                    "Dashboard en tiempo real",
                    "Reportes detallados"
                  ]}
                />
              </div>
              <div className="animate-fade-in-up animation-delay-800 hover:transform hover:scale-105 transition-all duration-300">
                <FeatureCard 
                  icon={<Brain className="w-12 sm:w-16 h-12 sm:h-16 text-[#00A8E8] animate-pulse" />}
                  title="IA Avanzada"
                  description="Sistema de inteligencia artificial que aprende y mejora continuamente."
                  features={[
                    "Aprendizaje automático",
                    "Análisis predictivo",
                    "Optimización continua",
                    "Detección precisa"
                  ]}
                />
              </div>
              <div className="animate-fade-in-up animation-delay-900 hover:transform hover:scale-105 transition-all duration-300">
                <FeatureCard 
                  icon={<Shield className="w-12 sm:w-16 h-12 sm:h-16 text-[#00A8E8] animate-pulse" />}
                  title="Seguridad Mejorada"
                  description="Sistema integral de seguridad para proteger vehículos y usuarios."
                  features={["Vigilancia 24/7",
                    "Alertas de seguridad",
                    "Registro de incidentes",
                    "Monitoreo continuo"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 sm:py-32">
        <div className=" mx-auto px-4 flex flex-col items-center justify-center">
          <div className="text-center w-full max-w-4xl mx-auto mb-12 sm:mb-20">
            <div className="overflow-hidden">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                <span className="text-white">Beneficios</span>{" "}
                <span className="text-[#00A8E8]">Excepcionales</span>
              </h2>
            </div>
            <div className="overflow-hidden flex flex-col items-center">
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
                Optimiza tu estacionamiento con nuestra solución integral
              </p>
              <p className="text-base sm:text-lg text-gray-400 mt-4 sm:mt-6 max-w-3xl leading-relaxed">
                Descubre cómo nuestro sistema inteligente puede transformar la gestión de tu estacionamiento
              </p>
            </div>
          </div>

          {/* Benefit Cards */}
          <div className="w-full max-w-6xl -mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 px-4">
              {/* Card 1 */}
              <div className="opacity-0 animate-slide-up animation-delay-300 h-full">
                <div className="bg-gray-800/50 p-6 sm:p-10 rounded-xl backdrop-blur-sm transform hover:scale-105 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/30 hover:border-[#00A8E8]/30 shadow-lg hover:shadow-[#00A8E8]/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-6 sm:mb-8 relative">
                      <div className="absolute inset-0 bg-[#00A8E8]/20 rounded-full animate-pulse"></div>
                      <ChartBar className="w-full h-full text-[#00A8E8] relative z-10 animate-float" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-white/90 tracking-wide">
                      Optimización de Espacios
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                      Maximiza la utilización de tu estacionamiento con datos precisos
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700/30">
                    <p className="text-sm text-gray-400 text-center italic">
                      "Mejora hasta un 40% la eficiencia de tu espacio"
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="opacity-0 animate-slide-up animation-delay-500 h-full">
                <div className="bg-gray-800/50 p-6 sm:p-10 rounded-xl backdrop-blur-sm transform hover:scale-105 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/30 hover:border-[#00A8E8]/30 shadow-lg hover:shadow-[#00A8E8]/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-6 sm:mb-8 relative">
                      <div className="absolute inset-0 bg-[#00A8E8]/20 rounded-full animate-pulse"></div>
                      <Clock className="w-full h-full text-[#00A8E8] relative z-10 animate-float animation-delay-150" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-white/90 tracking-wide">
                      Ahorro de Tiempo
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                      Reduce el tiempo de búsqueda de espacios disponibles
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700/30">
                    <p className="text-sm text-gray-400 text-center italic">
                      "Reduce hasta un 60% el tiempo de búsqueda"
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="opacity-0 animate-slide-up animation-delay-700 h-full">
                <div className="bg-gray-800/50 p-6 sm:p-10 rounded-xl backdrop-blur-sm transform hover:scale-105 hover:bg-gray-800/70 transition-all duration-500 border border-gray-700/30 hover:border-[#00A8E8]/30 shadow-lg hover:shadow-[#00A8E8]/10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-6 sm:mb-8 relative">
                      <div className="absolute inset-0 bg-[#00A8E8]/20 rounded-full animate-pulse"></div>
                      <Car className="w-full h-full text-[#00A8E8] relative z-10 animate-float animation-delay-300" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-center mb-4 text-white/90 tracking-wide">
                      Gestión Eficiente
                    </h3>
                    <p className="text-base sm:text-lg text-gray-300 text-center leading-relaxed">
                      Control total sobre la operación de tu estacionamiento
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-700/30">
                    <p className="text-sm text-gray-400 text-center italic">
                      "Aumenta un 50% la satisfacción del usuario"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-[#0A192F] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className=" mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <Target className="w-full h-full" />,
                number: "98%",
                title: "Precisión en la detección",
                description: "Detección precisa de vehículos y espacios",
                animation: "animate-glow"
              },
              {
                icon: <Clock className="w-full h-full" />,
                number: "50%",
                title: "Reducción de tiempo",
                description: "Reduce el tiempo de búsqueda de espacios disponibles",
                animation: "animate-glow"
              },
              {
                icon: <BarChart2 className="w-full h-full" />,
                number: "30%",
                title: "Aumento de eficiencia",
                description: "Aumenta la eficiencia de la gestión del estacionamiento",
                animation: "animate-glow"
              },
              {
                icon: <Eye className="w-full h-full" />,
                number: "24/7",
                title: "Monitoreo continuo",
                description: "Monitoreo continuo 24/7 para una gestión eficiente",
                animation: "animate-glow"
              }
            ].map((stat, index) => (
              <div key={index} className="h-full">
                <div className="stat-card bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 sm:p-8 rounded-xl border border-gray-700/50 shadow-lg h-full group hover:border-[#00A8E8]/50 hover:shadow-[#00A8E8]/20 transition-all duration-500 focus-within:border-[#00A8E8] focus-within:shadow-[#00A8E8]/30">
                  <div className="flex flex-col items-center justify-between h-full">
                    <div className="relative w-12 sm:w-16 h-12 sm:h-16 mb-6">
                      <div className={`absolute inset-0 bg-[#00A8E8]/20 rounded-full ${stat.animation}`}></div>
                      <div className="relative z-10 w-full h-full text-[#00A8E8] transform transition-transform duration-500 group-hover:scale-110">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 group-hover:text-[#00A8E8] transition-colors">
                        {stat.number}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-[#00A8E8] mb-2">
                        {stat.title}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TechnologySection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 sm:py-3">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between px-4 gap-4 sm:gap-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400 tracking-wider">© 2025</span>
              <span className="text-[11px] font-medium text-white tracking-wider">ParkingEyes</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-[11px] text-gray-400 hover:text-[#00A8E8] transition-colors tracking-wider">
                Monitoreo
              </a>
              <a href="#" className="text-[11px] text-gray-400 hover:text-[#00A8E8] transition-colors tracking-wider">
                Seguridad
              </a>
              <a href="#" className="text-[11px] text-gray-400 hover:text-[#00A8E8] transition-colors tracking-wider">
                Análisis
              </a>
            </div>

            <div className="text-[10px] text-gray-400 tracking-wider text-center sm:text-left">
              Desarrollado con ❤️ por el equipo de ParkingEyes
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default LandingPage; 