import { Mic, Square } from 'lucide-react';

export default function VoiceButton({ onClick, isListening = false }) {
  return (
    <div className="relative group flex flex-col items-center">
      {/* Ripple Rings */}
      {isListening && (
        <>
          <div className="absolute inset-0 bg-green-500/30 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
          <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }}></div>
          <div className="absolute inset-m-4 bg-green-500/10 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.8s' }}></div>
        </>
      )}

      {/* Main Button */}
      <button 
        onClick={onClick}
        className={`relative z-10 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-105 ${
          isListening 
            ? 'bg-gradient-to-br from-green-600 to-green-800 ring-4 ring-green-500/50 shadow-green-500/40' 
            : 'bg-gradient-to-br from-[#10B981] to-[#059669] border border-green-600 hover:border-green-400 shadow-lg shadow-green-500/20'
        }`}
        aria-label={isListening ? "Stop listening" : "Start voice search"}
      >
        <div className="relative z-10 transition-transform group-hover:scale-110">
          {isListening ? (
            <Square size={28} className="fill-white text-white md:w-8 md:h-8" />
          ) : (
            <div className="flex flex-col items-center text-white drop-shadow-md">
               <Mic size={32} className="md:w-10 md:h-10" />
            </div>
          )}
        </div>
      </button>
      
      {/* Tooltip */}
      <div className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="bg-surface border border-slate-700 text-slate-300 text-xs px-3 py-1.5 rounded-lg shadow-xl font-medium">
          {isListening ? 'Click to Stop' : 'Tap to Speak'}
        </span>
      </div>
    </div>
  );
}
