
import React from 'react';

interface AnimatedVoiceVisualizerProps {
  isSpeaking: boolean;
}

const AnimatedVoiceVisualizer: React.FC<AnimatedVoiceVisualizerProps> = ({ isSpeaking }) => {
  const speakingClasses = 'opacity-100 scale-100';
  const silentClasses = 'opacity-0 scale-75';

  return (
    <div className={`relative w-48 h-48 flex items-center justify-center transition-all duration-500 ${isSpeaking ? speakingClasses : silentClasses}`}>
      <div className="absolute w-full h-full rounded-full bg-cyan-500/10 animate-pulse-outer"></div>
      <div className="absolute w-3/4 h-3/4 rounded-full bg-cyan-500/20 animate-pulse-inner"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-500/50"></div>
    </div>
  );
};

export default AnimatedVoiceVisualizer;