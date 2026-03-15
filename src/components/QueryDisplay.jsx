import { MessageSquare } from 'lucide-react';

export default function QueryDisplay({ query }) {
  if (!query) return null;
  
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-surface border border-slate-700/50 shadow-lg animate-fade-in-up">
      <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-400">
        <MessageSquare size={16} />
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">You asked</p>
        <p className="text-white font-medium">"{query}"</p>
      </div>
    </div>
  );
}
