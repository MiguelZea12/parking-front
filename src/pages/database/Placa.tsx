import React, { useState } from 'react';
import { Plus, Loader2 } from 'lucide-react';
import { Placa } from '../../types/placa';
import TablePlaca from '../../components/database/TablePlaca';
import { Alert, AlertDescription } from '../../components/ui/Alert';
import { Modal } from '../../components/ui/Modal';
import PlacaForm from '../../components/database/PlacaForm';

const Placas: React.FC = () => {
  // Estado inicial con datos de ejemplo
  const [placas, setPlacas] = useState<Placa[]>([
    { id: 1, numero: "ABC-123", fechaRegistro: "2025-02-15" },
    { id: 2, numero: "XYZ-789", fechaRegistro: "2025-02-16" },
    { id: 3, numero: "DEF-456", fechaRegistro: "2025-02-16" },
    { id: 4, numero: "GHI-789", fechaRegistro: "2025-02-17" },
    { id: 5, numero: "JKL-012", fechaRegistro: "2025-02-17" }
  ]);
  const [loading,] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlaca, setEditingPlaca] = useState<Placa | null>(null);

  const handleCreatePlaca = () => {
    setEditingPlaca(null);
    setIsModalOpen(true);
  };

  const handleEditPlaca = (placa: Placa) => {
    setEditingPlaca(placa);
    setIsModalOpen(true);
  };

  const handleDeletePlaca = async (id: number) => {
    if (window.confirm('¿Está seguro de eliminar esta placa?')) {
      try {
        setPlacas(placas.filter(p => p.id !== id));
        setError(null);
      } catch (err) {
        setError('Error al eliminar placa');
        console.error(err);
      }
    }
  };

  const handleSubmitPlaca = async (placaData: Partial<Placa>) => {
    try {
      if (editingPlaca) {
        // Actualizar placa existente
        const updatedPlaca = { ...editingPlaca, ...placaData };
        setPlacas(placas.map(p => p.id === editingPlaca.id ? updatedPlaca : p));
      } else {
        // Crear nueva placa
        const newPlaca = {
          id: Math.max(...placas.map(p => p.id)) + 1,
          numero: placaData.numero!,
          fechaRegistro: placaData.fechaRegistro || new Date().toISOString().split('T')[0]
        };
        setPlacas([...placas, newPlaca]);
      }
      setIsModalOpen(false);
      setError(null);
    } catch (err) {
      throw new Error('Error al guardar placa');
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-14 transition-colors duration-200 p-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Gestión de Placas
        </h1>
        <button
          onClick={handleCreatePlaca}
          className="inline-flex items-center px-4 py-2 bg-parking-blue dark:bg-parking-blue hover:bg-parking-blue/10 dark:hover:bg-parking-blue/20 text-white font-medium rounded-lg"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nueva Placa
        </button>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
        <TablePlaca
          placas={placas}
          onEdit={handleEditPlaca}
          onDelete={handleDeletePlaca}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingPlaca ? 'Editar Placa' : 'Crear Placa'}
      >
        <PlacaForm
          placa={editingPlaca || undefined}
          onSubmit={handleSubmitPlaca}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Placas;

