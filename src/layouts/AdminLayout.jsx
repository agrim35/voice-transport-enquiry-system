import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Bus, PlusCircle, Map, ArrowLeft } from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Transport', path: '/admin/transport', icon: <Bus size={20} /> },
    { name: 'Add Transport', path: '/admin/add-transport', icon: <PlusCircle size={20} /> },
    { name: 'Routes', path: '/admin/routes', icon: <Map size={20} /> },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-surface border-r border-slate-800 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link to="/home" className="text-xl font-bold text-white">
            Admin Panel
          </Link>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary-500/10 text-primary-400 font-medium shadow-sm' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <span className={isActive ? 'text-primary-400' : 'text-slate-500'}>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-800/50">
          <Link to="/home" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors">
            <ArrowLeft size={18} /> Back to App
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-surface border-b border-slate-800 flex items-center px-6 md:hidden">
          <span className="font-bold text-white">Admin Panel</span>
        </header>
        <main className="flex-1 p-6 lg:p-10 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
