import { Bus, Train, ArrowRight } from 'lucide-react';

export default function TransportCard({ transport }) {
  const { name, type, source, destination, departureTime, fare } = transport;

  return (
    <div className="card flex flex-col md:flex-row items-center gap-6 hover:border-primary-500/30 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-2xl bg-slate-800/80 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:text-primary-400 transition-colors shrink-0 shadow-inner">
        {type.toLowerCase() === 'train' ? <Train size={28} /> : <Bus size={28} />}
      </div>
      
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <div>
          <p className="text-[11px] text-slate-500 mb-1 uppercase tracking-widest font-semibold">Transport</p>
          <p className="font-semibold text-white text-lg leading-tight">{name}</p>
          <p className="text-sm text-slate-400">{type}</p>
        </div>
        
        <div className="lg:col-span-2 flex items-center gap-3">
          <div className="flex-1">
            <p className="text-[11px] text-slate-500 mb-1 uppercase tracking-widest font-semibold">Route</p>
            <div className="flex items-center gap-3 text-slate-300">
              <span className="font-medium text-white truncate">{source}</span>
              <ArrowRight size={16} className="text-slate-500 flex-shrink-0" />
              <span className="font-medium text-white truncate">{destination}</span>
            </div>
          </div>
        </div>

        <div>
          <p className="text-[11px] text-slate-500 mb-1 uppercase tracking-widest font-semibold">Departure</p>
          <p className="font-medium text-white">{departureTime}</p>
        </div>
      </div>

      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 w-full md:w-auto border-t md:border-t-0 border-slate-700/50 pt-4 md:pt-0 mt-4 md:mt-0 md:pl-8 md:border-l">
        <div className="text-left md:text-right">
          <p className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-widest font-semibold">Fare</p>
          <p className="text-2xl font-bold text-white tracking-tight">{fare}</p>
        </div>
        <button className="btn-primary whitespace-nowrap px-6 py-2 shadow-sm rounded-xl text-sm w-full md:w-auto">
          Book
        </button>
      </div>
    </div>
  );
}
