
import React from 'react';
import { WidgetProps } from '../types';

const Widget: React.FC<WidgetProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 shadow-lg transition-all hover:border-cyan-500/50 hover:shadow-cyan-500/10 h-full">
      <div className="flex items-center mb-4 text-cyan-400">
        {icon}
        <h3 className="ml-3 font-semibold text-lg text-slate-200">{title}</h3>
      </div>
      <div className="text-slate-300">
        {children}
      </div>
    </div>
  );
};

export default Widget;