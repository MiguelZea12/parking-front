import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Usuario } from '../../services/userService';

interface Props {
  user: Usuario;
}

const AdditionalInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
      <div className="flex items-center space-x-3">
        <MapPin className="h-5 w-5 text-parking-blue" />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Dirección</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {user.direccion || 'No especificada'}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Calendar className="h-5 w-5 text-parking-blue" />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Fecha de Nacimiento</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {user.fecha_nacimiento || 'No especificada'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
