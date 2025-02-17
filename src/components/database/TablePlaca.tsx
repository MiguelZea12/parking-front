import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { Placa } from '../../types/placa';

interface TablePlacaProps {
  placas: Placa[];
  onEdit: (placa: Placa) => void;
  onDelete: (id: number) => void;
}

const TablePlaca: React.FC<TablePlacaProps> = ({ placas, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-parking-blue/20">
      <table className="min-w-full divide-y divide-parking-blue/20">
        <thead className="bg-gradient-to-r from-parking-black/90 to-parking-blue/90">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
              Número de Placa
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
              Fecha de Registro
            </th>
            <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-dark-bg-secondary divide-y divide-parking-blue/10">
          {placas.map((placa) => (
            <tr key={placa.id} className="hover:bg-parking-blue/5 dark:hover:bg-parking-blue/10 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-parking-black dark:text-white">
                {placa.numero}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-parking-black dark:text-white">
                {placa.fechaRegistro}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button
                  onClick={() => onEdit(placa)}
                  className="text-parking-blue hover:text-parking-blue/80 transition-colors mr-4"
                >
                  <Pencil className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(placa.id)}
                  className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePlaca;