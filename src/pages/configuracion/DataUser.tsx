import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Usuario, getUsuarioActual } from '../../services/userService';
import { Alert, AlertDescription } from '../../components/ui/Alert';
import UserInfo from '../../components/configuracion/UserInfo';
import ContactInfo from '../../components/configuracion/ContactInfo';
import AdditionalInfo from '../../components/configuracion/AdditionalInfo';

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      setLoading(true);
      const userData = await getUsuarioActual();
      setUser(userData);
    } catch (err) {
      setError('Error al cargar los datos del usuario');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-parking-blue" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 transition-colors duration-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-dark-bg-secondary rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-parking-black to-parking-blue p-6">
          <h1 className="text-2xl font-bold text-white">Perfil de Usuario</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <UserInfo user={user} />
            <ContactInfo user={user} />
          </div>
          <AdditionalInfo user={user} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
