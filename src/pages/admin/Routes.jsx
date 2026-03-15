import { Plus, Clock, MapPin, Settings2, Map as MapIcon, MoreVertical } from 'lucide-react';

export default function Routes() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Route Management</h1>
          <p className="text-slate-400 text-sm mt-1">Configure paths, stops, and schedules.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={18} /> Create Route
        </button>
      </div>

      <div className="grid gap-6">
        {[
          { name: 'Express Line 42', from: 'Central Station', to: 'Airport Terminal 1', duration: '45 mins', active: true, stops: 4 },
          { name: 'Intercity North', from: 'City A', to: 'City B', duration: '2h 15m', active: true, stops: 2 },
          { name: 'Downtown Loop', from: 'Main Square', to: 'Main Square', duration: '1h 00m', active: false, stops: 12 },
        ].map((route, i) => (
          <div key={i} className="card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 group hover:border-primary-500/50 transition-all duration-300 shadow-sm relative overflow-hidden">
            {/* Active Indicator Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${route.active ? 'bg-green-500' : 'bg-slate-700'}`}></div>
            <div className="flex-1 w-full">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg font-bold text-white">{route.name}</h3>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  route.active ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                }`}>
                  {route.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                  {route.from}
                </div>
                <div className="w-8 border-t border-dashed border-slate-600"></div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                  {route.to}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 sm:gap-8 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800/50 lg:pl-6 lg:border-l">
              <div className="text-sm">
                <p className="text-slate-500 mb-1 flex items-center gap-1.5"><Clock size={14} /> Duration</p>
                <p className="font-medium text-slate-300">{route.duration}</p>
              </div>
              <div className="text-sm">
                <p className="text-slate-500 mb-1 flex items-center gap-1.5"><MapPin size={14} /> Stops</p>
                <p className="font-medium text-slate-300">{route.stops}</p>
              </div>
              
              <div className="flex-1 flex justify-end gap-2 ml-auto">
                <button className="p-2 text-slate-400 hover:text-primary-400 hover:bg-primary-500/10 rounded-lg transition-colors border border-transparent" title="Edit Schedule">
                  <Settings2 size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors border border-transparent" title="View Map">
                  <MapIcon size={18} />
                </button>
                <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-700 rounded-lg transition-colors lg:hidden" title="More">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
