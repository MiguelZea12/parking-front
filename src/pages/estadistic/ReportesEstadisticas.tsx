import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsReports = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [activeTab, setActiveTab] = useState('comparativa');

  // Mock data - replace with actual API data
  const comparativeData = [
    { dia: 'Lun', actual: 75, anterior: 70 },
    { dia: 'Mar', actual: 82, anterior: 78 },
    { dia: 'Mie', actual: 88, anterior: 85 },
    { dia: 'Jue', actual: 85, anterior: 80 },
    { dia: 'Vie', actual: 90, anterior: 88 },
    { dia: 'Sab', actual: 65, anterior: 60 },
    { dia: 'Dom', actual: 55, anterior: 50 },
  ];

  const patronesData = [
    { hora: '8:00', laboral: 45, finde: 20 },
    { hora: '10:00', laboral: 75, finde: 35 },
    { hora: '12:00', laboral: 90, finde: 50 },
    { hora: '14:00', laboral: 85, finde: 60 },
    { hora: '16:00', laboral: 80, finde: 55 },
    { hora: '18:00', laboral: 70, finde: 40 },
    { hora: '20:00', laboral: 50, finde: 25 },
  ];

  return (
    <div className="space-y-4 min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 p-8 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Reportes de Ocupación</h1>
        <select
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white dark:bg-dark-bg-tertiary dark:border-dark-bg-tertiary dark:text-white focus:border-parking-blue dark:focus:border-parking-blue focus:outline-none focus:ring-2 focus:ring-parking-blue"
        >
          <option value="week">Semanal</option>
          <option value="month">Mensual</option>
          <option value="quarter">Trimestral</option>
        </select>
      </div>

      <div className="w-full">
        <div className="flex space-x-2 mb-4">
          <button
            onClick={() => setActiveTab('comparativa')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'comparativa'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Comparativa
          </button>
          <button
            onClick={() => setActiveTab('patrones')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'patrones'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Patrones
          </button>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4">
          {activeTab === 'comparativa' ? (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Comparativa con Período Anterior
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={comparativeData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dia" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      name="Período Actual"
                      stroke="#00A8E8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="anterior"
                      name="Período Anterior"
                      stroke="#666666"
                      strokeDasharray="5 5"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Patrones de Uso
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={patronesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hora" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="laboral" name="Días Laborales" fill="#000000" />
                    <Bar dataKey="finde" name="Fin de Semana" fill="#00A8E8" />
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
            Cambio vs Período Anterior
          </h3>
          <p className="text-3xl font-bold text-parking-blue">+5.4%</p>
          <p className="text-gray-600 dark:text-gray-400">En ocupación promedio</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Horas Pico
          </h3>
          <p className="text-3xl font-bold text-parking-blue">12:00-14:00</p>
          <p className="text-gray-600 dark:text-gray-400">Días laborales</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Predicción Siguiente Período
          </h3>
          <p className="text-3xl font-bold text-parking-blue">85.2%</p>
          <p className="text-gray-600 dark:text-gray-400">Ocupación esperada</p>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Resumen del Período
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Ocupación promedio</span>
              <span className="font-medium text-gray-800 dark:text-white">77.8%</span>
            </div>
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Día más ocupado</span>
              <span className="font-medium text-gray-800 dark:text-white">Viernes</span>
            </div>
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Hora más ocupada</span>
              <span className="font-medium text-gray-800 dark:text-white">13:00</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Ocupación mínima</span>
              <span className="font-medium text-gray-800 dark:text-white">20%</span>
            </div>
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Ocupación máxima</span>
              <span className="font-medium text-gray-800 dark:text-white">90%</span>
            </div>
            <div className="flex justify-between items-center border-b dark:border-dark-bg-tertiary pb-2">
              <span className="text-gray-600 dark:text-gray-400">Tendencia</span>
              <span className="font-medium text-green-500">Creciente</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsReports;