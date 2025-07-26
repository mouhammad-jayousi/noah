
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full p-4 flex justify-center items-center bg-slate-900/50 backdrop-blur-sm">
      <h1 className="text-3xl font-bold text-cyan-400 tracking-widest uppercase relative">
        n<span className="text-slate-300">o</span>ah
        <span className="absolute -top-1 -right-4 h-2 w-2 bg-cyan-400 rounded-full animate-pulse"></span>
      </h1>
    </header>
  );
};

export default Header;