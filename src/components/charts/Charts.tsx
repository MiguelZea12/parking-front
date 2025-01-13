import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { usePieData } from '../../../hooks/usePieData';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts: React.FC = () => {
  const { occupied, free, totalSpaces } = usePieData();

  const doughnutData = {
    labels: ['Ocupados', 'Libres'],
    datasets: [
      {
        data: [occupied, free],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      },
    ],
  };

  return (
    <div className="charts-container">
      <div className="pie-chart-container">
        <h3>Porcentaje de Ocupación</h3>
        <p>Ocupados: {occupied}</p>
        <p>Libres: {free}</p>
        <p>Total de Espacios: {totalSpaces}</p> {/* Nuevo dato mostrado */}
        <Doughnut data={doughnutData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default Charts;
