import React from 'react';
import { useSpacesStatus } from '../../hooks/useSpacesStatus';

const ParkingMap: React.FC = () => {
  const spaces = useSpacesStatus();

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-200 dark:bg-dark-bg-secondary">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Mapa del Estacionamiento</h2>
      </div>
      <div className="p-4 dark:bg-dark-bg-tertiary">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
          {spaces.map((space: any) => (
            <div
              key={space.id}
              className={`
                aspect-square
                rounded-lg
                flex
                items-center
                justify-center
                text-sm
                font-medium
                transition-colors
                cursor-pointer
                hover:opacity-90
                ${space.status === 'available' 
                  ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
                  : 'bg-rose-100 text-rose-800 hover:bg-rose-200'}
              `}
              title={`${space.id} - ${space.status === 'available' ? 'Disponible' : 'Ocupado'}`}
            >
              {space.id}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 rounded"></div>
            <span className='dark:text-white'>Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-rose-100 rounded"></div>
            <span className='dark:text-white'>Ocupado</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingMap;