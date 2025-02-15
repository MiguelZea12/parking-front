import React from 'react';
import { Play, Pause, RotateCcw, Maximize2 } from 'lucide-react';

interface VideoControlsProps {
  controlVideo: (action: string) => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({ controlVideo }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <button
        onClick={() => controlVideo('play')}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors gap-2"
      >
        <Play size={16} />
        <span>Reproducir</span>
      </button>
      
      <button
        onClick={() => controlVideo('pause')}
        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors gap-2"
      >
        <Pause size={16} />
        <span>Pausar</span>
      </button>
      
      <button
        onClick={() => controlVideo('restart')}
        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors gap-2"
      >
        <RotateCcw size={16} />
        <span>Reiniciar</span>
      </button>
      
      <button
        onClick={() => controlVideo('fullscreen')}
        className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors gap-2"
      >
        <Maximize2 size={16} />
        <span>Pantalla Completa</span>
      </button>
    </div>
  );
};

export default VideoControls;