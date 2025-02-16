import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import VideoControl from '../../components/home/VideoControls';
import Charts from '../../components/estadistic/Charts';
import ParkingMap from '../../components/map/ParkingMap';
import { controlVideoAction } from '../../services/apiService';

interface CameraOption {
  id: string;
  name: string;
  url: string;
  location: string;
}

const Home: React.FC = () => {
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
  ];

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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary py-6 transition-colors duration-200 p-6 py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content Area - Video and Map */}
          <div className="lg:col-span-8 space-y-6">
            {/* Video Section */}
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md transition-colors duration-200">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                      <Camera className="h-5 w-5 text-parking-blue" />
                      {selectedCamera.name}
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Ubicación: {selectedCamera.location}
                    </p>
                  </div>
                  <select
                    value={selectedCamera.id}
                    onChange={(e) => {
                      const camera = cameras.find(c => c.id === e.target.value);
                      if (camera) handleCameraChange(camera);
                    }}
                    className="w-full sm:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 
                             bg-white dark:bg-dark-bg-tertiary text-gray-800 dark:text-white
                             rounded-md shadow-sm focus:outline-none focus:ring-2 
                             focus:ring-parking-blue focus:border-parking-blue
                             dark:focus:ring-parking-blue dark:focus:border-parking-blue
                             transition-colors duration-200"
                  >
                    {cameras.map(camera => (
                      <option key={camera.id} value={camera.id}>
                        {camera.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="relative bg-gray-100 dark:bg-dark-bg-tertiary transition-colors duration-200">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100/80 dark:bg-dark-bg-tertiary/80">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-parking-blue"></div>
                  </div>
                )}
                <img 
                  src={selectedCamera.url}
                  alt={`Video de ${selectedCamera.name}`}
                  onError={handleVideoError}
                  onLoad={() => setIsLoading(false)}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain"
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-dark-bg-tertiary rounded-b-lg transition-colors duration-200">
                <VideoControl controlVideo={controlVideo} />
              </div>
            </div>

            {/* Parking Map Section */}
            <div className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md transition-colors duration-200">
              <ParkingMap />
            </div>
          </div>

          {/* Statistics Section - Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-6 bg-white dark:bg-dark-bg-secondary rounded-lg shadow-md transition-colors duration-200">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;