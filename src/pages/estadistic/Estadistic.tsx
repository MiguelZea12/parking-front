import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnhancedStatistics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [activeTab, setActiveTab] = useState('ocupacion');

  // Mock data - replace with actual API data
  const weeklyData = [
    { day: 'Lun', ocupados: 45, libres: 15, ocupacionPromedio: 75 },
    { day: 'Mar', ocupados: 52, libres: 8, ocupacionPromedio: 87 },
    { day: 'Mie', ocupados: 48, libres: 12, ocupacionPromedio: 80 },
    { day: 'Jue', ocupados: 55, libres: 5, ocupacionPromedio: 92 },
    { day: 'Vie', ocupados: 58, libres: 2, ocupacionPromedio: 97 },
    { day: 'Sab', ocupados: 30, libres: 30, ocupacionPromedio: 50 },
    { day: 'Dom', ocupados: 25, libres: 35, ocupacionPromedio: 42 },
  ];

  const hourlyData = [
    { hora: '8:00', ocupados: 20, libres: 40, ocupacionPromedio: 33 },
    { hora: '10:00', ocupados: 35, libres: 25, ocupacionPromedio: 58 },
    { hora: '12:00', ocupados: 50, libres: 10, ocupacionPromedio: 83 },
    { hora: '14:00', ocupados: 45, libres: 15, ocupacionPromedio: 75 },
    { hora: '16:00', ocupados: 40, libres: 20, ocupacionPromedio: 67 },
    { hora: '18:00', ocupados: 48, libres: 12, ocupacionPromedio: 80 },
    { hora: '20:00', ocupados: 30, libres: 30, ocupacionPromedio: 50 },
  ];

  return (
    <div className="space-y-4 min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 p-8 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Estadísticas de Ocupación</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-dark-bg-tertiary dark:border-dark-bg-tertiary dark:text-white focus:border-parking-blue dark:focus:border-parking-blue focus:outline-none focus:ring-2 focus:ring-parking-blue"
        >
          <option value="day">Hoy</option>
          <option value="week">Semana</option>
          <option value="month">Mes</option>
        </select>
      </div>

      <div className="w-full">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab('ocupacion')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'ocupacion'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Ocupación
          </button>
          <button
            onClick={() => setActiveTab('horas')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'horas'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Horas Pico
          </button>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4">
          {activeTab === 'ocupacion' ? (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Tendencia de Ocupación por Día
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="ocupacionPromedio" 
                      name="Ocupación (%)" 
                      stroke="#00A8E8" 
                      activeDot={{ r: 8 }} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Distribución por Horas
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hourlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="ocupados" name="Espacios Ocupados" fill="#000000" />
                    <Bar dataKey="libres" name="Espacios Libres" fill="#00A8E8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Hora Más Concurrida
          </h3>
          <p className="text-3xl font-bold text-parking-blue">14:00</p>
          <p className="text-gray-600 dark:text-gray-400">83% de ocupación</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Día Más Concurrido
          </h3>
          <p className="text-3xl font-bold text-parking-blue">Viernes</p>
          <p className="text-gray-600 dark:text-gray-400">97% de ocupación</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Ocupación Promedio
          </h3>
          <p className="text-3xl font-bold text-parking-blue">74.6%</p>
          <p className="text-gray-600 dark:text-gray-400">Esta semana</p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedStatistics;