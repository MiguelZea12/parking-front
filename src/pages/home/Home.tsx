import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import VideoControl from '../../components/home/VideoControls';
import Charts from '../../components/estadistic/Charts';
import ParkingMap from '../../components/map/ParkingMap';
import { controlVideoAction } from '../../../services/apiService';

interface CameraOption {
  id: string;
  name: string;
  url: string;
  location: string;
}

const Home: React.FC = () => {
  // Definimos primero el array de cámaras
  const cameras: CameraOption[] = [
    {
      id: '1',
      name: 'Cámara Principal',
      url: 'https://3kfc8nmn-5000.use.devtunnels.ms/video_feed',
      location: 'Entrada Principal'
    },
    {
      id: '2',
      name: 'Cámara Secundaria',
      url: 'https://3kfc8nmn-5000.use.devtunnels.ms/video_feed2',
      location: 'Área Norte'
    },
    // Agrega más cámaras según necesites
  ];

  // Luego usamos el array para inicializar el estado
  const [selectedCamera, setSelectedCamera] = useState<CameraOption>(cameras[0]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCameraChange = (camera: CameraOption) => {
    setIsLoading(true);
    setSelectedCamera(camera);
  };

  const handleVideoError = () => {
    console.error('Error cargando el video. Intentando reconectar...');
    setIsLoading(true);
    setTimeout(() => {
      setSelectedCamera({ ...selectedCamera });
      setIsLoading(false);
    }, 1000);
  };

  const controlVideo = async (action: string) => {
    try {
      await controlVideoAction(action);
    } catch (error) {
      console.error('Error controlling video:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sección de Video */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <Camera className="h-5 w-5" />
                    {selectedCamera.name}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Ubicación: {selectedCamera.location}
                  </p>
                </div>
                <select
                  value={selectedCamera.id}
                  onChange={(e) => {
                    const camera = cameras.find(c => c.id === e.target.value);
                    if (camera) handleCameraChange(camera);
                  }}
                  className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {cameras.map(camera => (
                    <option key={camera.id} value={camera.id}>
                      {camera.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="relative">
              {isLoading && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
              )}
              <img 
                src={selectedCamera.url}
                alt={`Video de ${selectedCamera.name}`}
                onError={handleVideoError}
                onLoad={() => setIsLoading(false)}
                className="w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="p-4 bg-gray-50">
              <VideoControl controlVideo={controlVideo} />
            </div>
          </div>

          {/* Sección del Mapa */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Vista del Estacionamiento</h2>
            <ParkingMap />
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Estadísticas</h2>
            <Charts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;