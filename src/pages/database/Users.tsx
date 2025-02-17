// src/pages/database/Users.tsx
import React, { useState, useEffect } from 'react';
import { 
  Plus,
  Loader2
} from 'lucide-react';
import { 
  getUsuarios, 
  createUsuario, 
  updateUsuario, 
  deleteUsuario,
  Usuario 
} from '../../services/userService';
import TableUser from '../../components/database/TableUser';
import { Alert, AlertDescription } from '../../components/ui/Alert';
import { Modal } from '../../components/ui/Modal';
import UserForm from '../../components/database/UserForm';

const Users: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      setLoading(true);
      const data = await getUsuarios();
      setUsuarios(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar usuarios');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (usuario: Usuario) => {
    setEditingUser(usuario);
    setIsModalOpen(true);
  };

  const handleDeleteUser = async (id: number) => {
    if (window.confirm('¿Está seguro de eliminar este usuario?')) {
      try {
        await deleteUsuario(id);
        setUsuarios(usuarios.filter(u => u.id !== id));
        setError(null);
      } catch (err) {
        setError('Error al eliminar usuario');
        console.error(err);
      }
    }
  };

  const handleSubmitUser = async (userData: Partial<Usuario>) => {
    try {
      if (editingUser) {
        const updatedUser = await updateUsuario(editingUser.id, userData);
        setUsuarios(usuarios.map(u => u.id === editingUser.id ? updatedUser : u));
      } else {
        const newUser = await createUsuario(userData as Omit<Usuario, 'id'>);
        setUsuarios([...usuarios, newUser]);
      }
      setIsModalOpen(false);
      setError(null);
    } catch (err) {
      throw new Error('Error al guardar usuario');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 transition-colors duration-200 p-8 ">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Gestión de Usuarios
        </h1>
        <button
          onClick={handleCreateUser}
          className="inline-flex items-center px-4 py-2 bg-parking-blue dark:bg-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 text-white font-medium rounded-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nuevo Usuario
        </button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <TableUser
          usuarios={usuarios}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingUser ? 'Editar Usuario' : 'Crear Usuario'}
      >
        <UserForm
          user={editingUser || undefined}
          onSubmit={handleSubmitUser}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Users;