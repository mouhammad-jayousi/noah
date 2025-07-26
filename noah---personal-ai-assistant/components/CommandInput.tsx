
import React, { useState } from 'react';

interface CommandInputProps {
  onSubmit: (command: string) => void;
  disabled: boolean;
}

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
)

const CommandInput: React.FC<CommandInputProps> = ({ onSubmit, disabled }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disabled || !value.trim()) return;
    onSubmit(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask me anything..."
        disabled={disabled}
        className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-6 pr-16 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={disabled}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full text-slate-400 hover:bg-cyan-500/20 hover:text-cyan-400 disabled:hover:bg-transparent disabled:text-slate-600 transition-colors"
      >
        <SendIcon />
      </button>
    </form>
  );
};

export default CommandInput;