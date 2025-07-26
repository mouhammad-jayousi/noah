
import React, { useEffect, useRef, useState } from 'react';

interface FaceIDProps {
  onAuthenticated: () => void;
}

const FaceID: React.FC<FaceIDProps> = ({ onAuthenticated }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [authMessage, setAuthMessage] = useState('Initializing biometric scan...');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        setError("Camera access denied. Please enable camera permissions to proceed.");
        setAuthMessage("Authentication failed");
      }
    };

    startCamera();

    if (!error) {
        setTimeout(() => setAuthMessage('Calibrating sensors...'), 1500);
        setTimeout(() => setAuthMessage('Analyzing facial structure...'), 3000);
        setTimeout(() => setAuthMessage('Identity confirmed. Welcome.'), 4500);
        setTimeout(onAuthenticated, 5500);
    }
    
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-cyan-500/50 flex items-center justify-center">
        {error ? (
          <div className="text-center p-4">
             <p className="text-red-500">{error}</p>
          </div>
        ) : (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1]"
          />
        )}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 z-20 animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-1 h-full bg-cyan-300/50 z-30 animate-[scan_3s_ease-in-out_infinite]"></div>
        <style>{`
          @keyframes scan {
            0% { transform: translateY(-100%) translateX(-50%); }
            50% { transform: translateY(100%) translateX(-50%); }
            50.01% { transform: translateY(-100%) translateX(-50%); }
            100% { transform: translateY(-100%) translateX(-50%); }
          }
        `}</style>
      </div>
      <p className="mt-8 text-xl text-cyan-300 tracking-widest font-mono transition-opacity duration-500">
        {authMessage}
      </p>
    </div>
  );
};

export default FaceID;