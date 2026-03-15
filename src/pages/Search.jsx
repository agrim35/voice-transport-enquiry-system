import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Search() {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/results');
  };

  return (
    <div className="max-w-4xl mx-auto py-12 flex flex-col items-center animate-fade-in-up">
      <div className="text-center mb-10 w-full">
        <h2 className="text-3xl font-bold text-white mb-3">Find Your Transport</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Enter your specific route query to get comprehensive schedules and fares.
        </p>
      </div>

      <div className="w-full flex justify-center mb-16">
        <SearchBar onSubmit={handleSearch} placeholder="e.g. Bus from Chennai to Bangalore" />
      </div>

      <div className="w-full max-w-3xl space-y-8">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span>🕒</span> Recent Searches
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { q: 'Trains from Mumbai to Pune', time: '2 hours ago' },
            { q: 'Next bus to Airport', time: 'Yesterday' },
            { q: 'Shatabdi to Delhi', time: 'Yesterday' },
          ].map((item, i) => (
            <div key={i} className="card p-4 flex flex-col group cursor-pointer hover:border-primary-500/50">
              <p className="text-white font-medium mb-1 group-hover:text-primary-400 transition-colors">"{item.q}"</p>
              <p className="text-xs text-slate-500">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
