import React from 'react';
import { User } from 'lucide-react';
import { Usuario } from '../../services/userService';

interface Props {
  user: Usuario;
}

const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <User className="h-5 w-5 text-parking-blue" />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Nombre Completo</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {`${user.nombre} ${user.apellido}`}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="text-parking-blue font-mono">ID</div>
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Cédula</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {user.cedula}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
