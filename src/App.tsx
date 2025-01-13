import React, { useState } from 'react';
import Header from './components/Header';
import VideoControl from './components/videoControls/VideoControls';
import Charts from './components/charts/Charts';
import ParkingMap from './components/parkingMap/ParkingMap';
import { controlVideoAction } from '../services/apiService';
import '../styles/styles.css';

const App: React.FC = () => {
  const [videoSrc, setVideoSrc] = useState<string>('https://3kfc8nmn-5000.use.devtunnels.ms/video_feed');

  const controlVideo = async (action: string) => {
    try {
      await controlVideoAction(action);
    } catch (error) {
      console.error('Error controlling video:', error);
    }
  };

  const handleVideoError = () => {
    console.error('Error cargando el video. Intentando reconectar...');
    setVideoSrc('');
    setTimeout(() => {
      setVideoSrc('https://3kfc8nmn-5000.use.devtunnels.ms/video_feed');
    }, 1000);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="left-column">
          <div className="video-container">
            <img
              src={videoSrc}
              alt="Video de Estacionamiento"
              onError={handleVideoError}
            />
            <VideoControl controlVideo={controlVideo} />
          </div>
          <div className="map-wrapper">
            <ParkingMap />
          </div>
        </div>
        <div className="right-column">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default App;
