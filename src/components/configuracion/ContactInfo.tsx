import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Usuario } from '../../services/userService';

interface Props {
  user: Usuario;
}

const ContactInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <Phone className="h-5 w-5 text-parking-blue" />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {user.telefono || 'No especificado'}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Mail className="h-5 w-5 text-parking-blue" />
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {user.email || 'No especificado'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
