import { Download, Car, Map as MapIcon, Ticket, DollarSign, AlertTriangle, XOctagon, Info, CheckCircle } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Vehicles', value: '1,248', icon: <Car size={24} />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Active Routes', value: '342', icon: <MapIcon size={24} />, color: 'text-green-400', bg: 'bg-green-400/10' },
    { label: 'Daily Bookings', value: '4,892', icon: <Ticket size={24} />, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { label: 'Revenue (Today)', value: '$12,450', icon: <DollarSign size={24} />, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-slate-400 text-sm mt-1">Here is what's happening today.</p>
        </div>
        <button className="btn-primary flex items-center gap-2 mt-4 sm:mt-0">
          <Download size={18} /> Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="card p-5">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${stat.bg} ${stat.color}`}>
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Bookings</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-sm text-slate-400">
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Route</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 text-white">John Doe {i}</td>
                    <td className="py-3 text-slate-300">City A &rarr; City B</td>
                    <td className="py-3 text-slate-400">Oct 24, 2023</td>
                    <td className="py-4 border-b border-slate-800/30">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
                        <CheckCircle size={12} /> Confirmed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-white mb-4">System Alerts</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0 mt-0.5">
                <AlertTriangle size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Heavy Traffic Route 42</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Expected 15 min delays approaching downtown.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                <XOctagon size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Maintenance Required</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Bus #102 reporting engine warning.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                <Info size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">System Update</p>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">Scheduled maintenance at 02:00 AM tonight.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
