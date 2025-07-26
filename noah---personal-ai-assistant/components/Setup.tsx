
import React from 'react';

interface SetupProps {
  onIntegrate: () => void;
  onSkip: () => void;
  disabled: boolean;
}

const GoogleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
        <path fill="none" d="M0 0h48v48H0z"></path>
    </svg>
);


const Setup: React.FC<SetupProps> = ({ onIntegrate, onSkip, disabled }) => {
  return (
    <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-slate-900/50 animate-fade-in">
      <h2 className="text-2xl font-bold text-center text-slate-100 mb-2">Initial Setup</h2>
      <p className="text-slate-400 text-center mb-8">Let's connect your accounts to unlock my full potential.</p>

      <div className="space-y-4">
        <button
          onClick={onIntegrate}
          disabled={disabled}
          className="w-full bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800/50 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 group"
        >
          <GoogleIcon />
          <span className="ml-3">Integrate with Google Workspace</span>
        </button>
        
        <button
          onClick={onSkip}
          disabled={disabled}
          className="w-full text-slate-400 hover:text-white disabled:text-slate-600 font-medium py-2 px-4 rounded-lg transition-colors duration-300">
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default Setup;
