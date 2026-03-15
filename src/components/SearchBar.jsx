import { Search } from 'lucide-react';

export default function SearchBar({ onSubmit, placeholder = "Or type your destination..." }) {
  return (
    <form onSubmit={onSubmit} className="w-full max-w-2xl relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>

      <div className="relative flex items-center bg-surface border border-slate-700/80 rounded-2xl shadow-xl overflow-hidden focus-within:border-primary-500/50 focus-within:ring-4 focus-within:ring-primary-500/10 transition-all duration-300 group-hover:border-slate-600">
        <div className="pl-5 pr-3 text-slate-400">
          <Search size={22} className="text-slate-500" />
        </div>

        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 bg-transparent border-none text-white py-4 pr-4 focus:outline-none focus:ring-0 placeholder:text-slate-500 text-base sm:text-lg"
          required
        />

        <div className="pr-2 py-2">
          <button type="submit" className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-sm active:scale-95">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
