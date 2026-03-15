import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import VoiceButton from '../components/VoiceButton';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);
  
  // Rotating headlines
  const headlines = [
    "What are you working on?",
    "Where are you planning to go Today?",
    "What's your plan today?",
    "Plan your trip",
    "Where to next?",
    "Find your perfect route",
    "Let's get you moving"
  ];
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 4000); // Change headline every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleVoiceSearch = () => {
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Voice Search. Please use Chrome, Edge, or Safari.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;
    
    recognition.continuous = false; // Automatically stops when user finishes a phrase
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript('');
    };

    recognition.onresult = (event) => {
      let currentTranscript = '';
      let isFinal = false;

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        currentTranscript += event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          isFinal = true;
        }
      }

      setTranscript(currentTranscript);

      // If sentence is complete, wait 1 second for user to read it, then navigate
      if (isFinal) {
        recognition.stop();
        setTimeout(() => {
          navigate(`/results?q=${encodeURIComponent(currentTranscript.trim())}`);
        }, 1500);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleTextSearch = (e) => {
    e.preventDefault();
    navigate('/results');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in-up">
      <div className="w-full max-w-3xl flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-4xl font-medium text-slate-200 tracking-wide transition-opacity duration-500">
          {headlines[headlineIndex]}
        </h1>

        <div className="w-full flex justify-center mb-8">
          <VoiceButton onClick={handleVoiceSearch} isListening={isListening} />
        </div>

        <div className="w-full flex flex-col items-center gap-4">
          {isListening ? (
            <div className="w-full max-w-3xl h-[68px] flex items-center justify-center bg-[#212121] border border-green-500/50 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-green-500/10 animate-pulse"></div>
              <p className="text-xl md:text-2xl text-slate-200 tracking-wide font-medium z-10">
                {transcript}
                <span className="inline-block w-1.5 h-6 ml-1 bg-green-500 animate-pulse align-middle"></span>
              </p>
            </div>
          ) : (
            <SearchBar 
              onSubmit={handleTextSearch} 
              onVoiceClick={handleVoiceSearch}
              isListening={isListening}
              placeholder="Ask anything" 
            />
          )}
        </div>
      </div>
    </div>
  );
}
