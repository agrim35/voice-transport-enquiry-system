import { useLocation } from 'react-router-dom';
import QueryDisplay from '../components/QueryDisplay';
import ResultsList from '../components/ResultsList';
import { mockTransports } from '../mockData/transport';

export default function Results() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || 'Bus from Chennai to Bangalore';

  return (
    <div className="max-w-5xl mx-auto py-8">
      <div className="mb-10 text-center md:text-left">
        <QueryDisplay query={query} />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-64 shrink-0 space-y-6">
          <div className="card p-5">
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-sm">Filters</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-slate-400">Transport Type</p>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-primary-500 focus:ring-primary-500" defaultChecked />
                  <span className="text-sm text-white">Bus</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-800 text-primary-500 focus:ring-primary-500" defaultChecked />
                  <span className="text-sm text-white">Train</span>
                </label>
              </div>

              <div className="pt-4 border-t border-slate-700/50 space-y-2">
                <p className="text-sm text-slate-400">Sort By</p>
                <select className="input text-sm py-1.5">
                  <option>Cheapest First</option>
                  <option>Earliest Departure</option>
                  <option>Fastest Duration</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Results */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4 px-2">
            <p className="text-slate-400 font-medium">{mockTransports.length} results found</p>
          </div>
          <ResultsList results={mockTransports} />
        </div>
      </div>
    </div>
  );
}
