import TransportCard from './TransportCard';

export default function ResultsList({ results, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card h-32 animate-pulse bg-slate-800/50 border-slate-700/30"></div>
        ))}
      </div>
    );
  }

  if (!results || results.length === 0) {
    return (
      <div className="card text-center py-12">
        <div className="text-4xl mb-4">📭</div>
        <h3 className="text-xl font-semibold text-white mb-2">No transports found</h3>
        <p className="text-slate-400">Try adjusting your search criteria or voice query.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 relative">
      <div className="absolute -left-4 top-4 bottom-4 w-px bg-gradient-to-b from-primary-500/0 via-primary-500/20 to-primary-500/0 hidden md:block"></div>
      {results.map((transport, index) => (
        <div 
          key={transport.id || index} 
          className="animate-fade-in-up" 
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <TransportCard transport={transport} />
        </div>
      ))}
    </div>
  );
}
