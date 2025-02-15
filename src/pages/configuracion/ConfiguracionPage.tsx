import React from 'react';
import ParkingMap from '../../components/map/ParkingMap';

const ConfiguracionPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h1 className="text-2xl font-bold mb-4">Mapa de Estacionamiento</h1>
        <ParkingMap />
      </div>
    </div>
  );
};

export default ConfiguracionPage;