import React from 'react';
import { useSpacesStatus } from '../../../hooks/useSpacesStatus';
import '../../../styles/ParkingMap.css';

const ParkingMap: React.FC = () => {
  const spaces = useSpacesStatus();

  return (
    <div className="parking-map">
      <h3>Mapa del Estacionamiento</h3>
      <div className="parking-grid">
        {spaces.map((space: any) => (
          <div
            key={space.id}
            className={`parking-space ${space.status}`}
            title={`${space.id} - ${space.status === 'available' ? 'Disponible' : 'Ocupado'}`}
          >
            {space.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParkingMap;
