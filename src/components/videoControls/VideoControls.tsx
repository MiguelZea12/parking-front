import React from 'react';

interface VideoControlsProps {
  controlVideo: (action: string) => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({ controlVideo }) => (
  <div className="controls">
    <button onClick={() => controlVideo('play')}>▶ Reproducir</button>
    <button onClick={() => controlVideo('pause')}>⏸ Pausar</button>
    <button onClick={() => controlVideo('restart')}>🔄 Reiniciar</button>
  </div>
);

export default VideoControls;
