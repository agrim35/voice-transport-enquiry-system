import { Link } from 'react-router-dom';
import { Mic, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-surface/80 backdrop-blur-lg border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform">
              <Mic size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Transport<span className="text-primary-400">IQ</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
            <Link to="/search" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Search</Link>
            <div className="h-4 w-px bg-slate-700"></div>
            <Link to="/admin" className="text-sm font-medium px-4 py-2 rounded-lg bg-primary-500/10 text-primary-400 hover:bg-primary-500/20 transition-colors border border-primary-500/20">
              Admin Portal
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
