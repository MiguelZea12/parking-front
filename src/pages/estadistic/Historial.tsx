import  { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatisticsHistory = () => {
  const [dateRange, setDateRange] = useState('week');
  const [activeTab, setActiveTab] = useState('registros');

  // Mock data - replace with actual API data
  const historyData = [
    {
      fecha: '2024-02-17',
      hora: '14:30',
      espaciosTotal: 60,
      espaciosOcupados: 58,
      porcentajeOcupacion: 96.7
    },
    {
      fecha: '2024-02-17',
      hora: '15:00',
      espaciosTotal: 60,
      espaciosOcupados: 60,
      porcentajeOcupacion: 100
    }
  ];

  const occupancyTrend = [
    { fecha: '13/Feb', ocupacion: 85 },
    { fecha: '14/Feb', ocupacion: 90 },
    { fecha: '15/Feb', ocupacion: 88 },
    { fecha: '16/Feb', ocupacion: 95 },
    { fecha: '17/Feb', ocupacion: 100 }
  ];

  return (
    <div className="space-y-4 min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 p-8 transition-colors duration-200">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Historial de Ocupación</h1>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
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
            onClick={() => setActiveTab('registros')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'registros'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Registros
          </button>
          <button
            onClick={() => setActiveTab('tendencia')}
            className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
              activeTab === 'tendencia'
                ? 'bg-parking-blue text-white'
                : 'bg-gray-100 dark:bg-dark-bg-tertiary text-gray-700 dark:text-gray-300 hover:bg-parking-blue hover:text-white'
            }`}
          >
            Tendencia
          </button>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4">
          {activeTab === 'registros' ? (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Registro Detallado
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-dark-bg-tertiary">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Fecha</th>
                      <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Hora</th>
                      <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Total</th>
                      <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Ocupados</th>
                      <th className="px-4 py-2 text-left text-gray-600 dark:text-gray-300">Ocupación</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((row, index) => (
                      <tr key={index} className="border-b dark:border-dark-bg-tertiary">
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{row.fecha}</td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{row.hora}</td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{row.espaciosTotal}</td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{row.espaciosOcupados}</td>
                        <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{row.porcentajeOcupacion}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
                Tendencia de Ocupación
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={occupancyTrend} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="fecha" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="ocupacion"
                      name="Ocupación (%)"
                      stroke="#00A8E8"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Eventos Importantes
          </h3>
          <p className="text-parking-blue font-medium">Ocupación Completa</p>
          <p className="text-gray-600 dark:text-gray-400">Hoy a las 15:00</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Mayor Ocupación
          </h3>
          <p className="text-3xl font-bold text-parking-blue">100%</p>
          <p className="text-gray-600 dark:text-gray-400">17/Feb 15:00</p>
        </div>

        <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md p-4 transition-colors duration-200">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Promedio del Período
          </h3>
          <p className="text-3xl font-bold text-parking-blue">91.6%</p>
          <p className="text-gray-600 dark:text-gray-400">Esta semana</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsHistory;