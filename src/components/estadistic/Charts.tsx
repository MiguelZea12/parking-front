import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { usePieData } from '../../hooks/usePieData';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts: React.FC = () => {
  const { occupied, free, totalSpaces } = usePieData();

  const doughnutData = {
    labels: ['Ocupados', 'Libres'],
    datasets: [
      {
        data: [occupied, free],
        backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200 dark:bg-dark-bg-secondary">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Porcentaje de Ocupación</h2>
      </div>
      <div className="p-4 dark:bg-dark-bg-tertiary">
        <div className="grid grid-cols-2 gap-4 mb-6 text-center">
          <div className="bg-rose-50 p-3 rounded-lg">
            <p className="text-rose-600 text-2xl font-bold">{occupied}</p>
            <p className="text-rose-700">Ocupados</p>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-blue-600 text-2xl font-bold">{free}</p>
            <p className="text-blue-700">Libres</p>
          </div>
          <div className="col-span-2 bg-gray-50 p-3 rounded-lg">
            <p className="text-gray-600 text-2xl font-bold">{totalSpaces}</p>
            <p className="text-gray-700">Total de Espacios</p>
          </div>
        </div>
        <div className="w-full max-w-xs mx-auto">
          <Doughnut className='dark:text-white' data={doughnutData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Charts;