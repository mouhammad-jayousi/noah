
import React, { useState, useCallback } from 'react';
import FaceID from './components/FaceID';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CommandInput from './components/CommandInput';
import AnimatedVoiceVisualizer from './components/AnimatedVoiceVisualizer';
import Setup from './components/Setup';
import { getNoahResponse } from './services/geminiService';

type AppState = 'auth' | 'setup' | 'dashboard';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('auth');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAiSpeaking, setIsAiSpeaking] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');

  const handleAuthentication = useCallback(() => {
    const setupComplete = localStorage.getItem('noah_setup_complete') === 'true';

    if (setupComplete) {
      setAppState('dashboard');
      setAiResponse("Welcome back. All systems are online. How can I assist you?");
      setIsAiSpeaking(true);
      setTimeout(() => setIsAiSpeaking(false), 4000);
    } else {
      setAppState('setup');
      setAiResponse("Identity confirmed. Before we begin, let's integrate your services to unlock my full potential.");
      setIsAiSpeaking(true);
      setTimeout(() => setIsAiSpeaking(false), 5000);
    }
  }, []);
  
  const speakAndPause = useCallback(async (text: string, duration: number) => {
    setAiResponse(text);
    setIsAiSpeaking(true);
    await new Promise(resolve => setTimeout(resolve, duration));
  }, []);

  const handleGoogleIntegrate = useCallback(async () => {
    setIsLoading(true);

    await speakAndPause("Establishing secure connection to Google Cloud...", 2000);
    await speakAndPause("Authenticating... This is a simulation, no action needed.", 2000);
    await speakAndPause("Syncing Calendar, Email, and Drive services...", 2000);
    await speakAndPause("Integration successful. We are synchronized.", 2000);

    localStorage.setItem('noah_setup_complete', 'true');
    setAppState('dashboard');
    setIsAiSpeaking(false);
    setIsLoading(false);
  }, [speakAndPause]);

  const handleSkipSetup = useCallback(() => {
    setIsLoading(true);
    speakAndPause("Understood. We can connect your accounts later. Proceeding to the dashboard.", 3000).then(() => {
        localStorage.setItem('noah_setup_complete', 'true');
        setAppState('dashboard');
        setIsLoading(false);
        setIsAiSpeaking(false);
    });
  }, [speakAndPause]);

  const handleCommandSubmit = useCallback(async (command: string) => {
    if (!command.trim()) return;

    setIsLoading(true);
    setAiResponse('');
    setIsAiSpeaking(true);

    const response = await getNoahResponse(command);
    
    setIsLoading(false);
    setAiResponse(response);

    setTimeout(() => {
      setIsAiSpeaking(false);
    }, 2000);
  }, []);

  if (appState === 'auth') {
    return <FaceID onAuthenticated={handleAuthentication} />;
  }

  return (
    <div className="flex flex-col h-screen bg-slate-900 text-slate-100 overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center space-y-8 flex-1">
          <AnimatedVoiceVisualizer isSpeaking={isAiSpeaking || isLoading} />
          
          <div className="w-full max-w-2xl min-h-[6rem] bg-slate-800/30 rounded-lg p-4 text-center flex items-center justify-center transition-all duration-300">
            {isLoading && !aiResponse && <p className="text-cyan-400">Thinking...</p>}
            {(aiResponse) && (
              <p className="text-slate-200 text-lg leading-relaxed">{aiResponse}</p>
            )}
            {!isLoading && !aiResponse && (
                 <p className="text-slate-500">I'm listening...</p>
            )}
          </div>
          
          {appState === 'setup' && <Setup onIntegrate={handleGoogleIntegrate} onSkip={handleSkipSetup} disabled={isLoading} />}
          {appState === 'dashboard' && <Dashboard />}
        </div>
      </main>
      <div className="p-4 w-full max-w-3xl mx-auto">
        {appState === 'dashboard' && <CommandInput onSubmit={handleCommandSubmit} disabled={isLoading} />}
      </div>
    </div>
  );
};

export default App;
