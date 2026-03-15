import { Link } from 'react-router-dom';
import { Plus, Search, Bus, Train, Edit2, Trash2, Filter } from 'lucide-react';

export default function Transport() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Transport Fleet</h1>
          <p className="text-slate-400 text-sm mt-1">Manage all available transport units.</p>
        </div>
        <Link to="/admin/add-transport" className="btn-primary flex items-center gap-2">
          <Plus size={18} /> Add New Transport
        </Link>
      </div>

      <div className="card">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <div className="relative w-full sm:max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input type="text" placeholder="Search vehicles..." className="input pl-10" />
          </div>
          <div className="relative w-full sm:w-auto shrink-0">
            <Filter size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <select className="input pl-10 appearance-none min-w-[150px]">
              <option>All Types</option>
              <option>Bus</option>
              <option>Train</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 text-sm text-slate-400 bg-slate-800/50">
                <th className="p-4 font-medium rounded-tl-lg">ID</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Model</th>
                <th className="p-4 font-medium">Capacity</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right rounded-tr-lg">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { id: 'V-1042', type: 'Bus', model: 'Volvo 9900', cap: 48, status: 'Active' },
                { id: 'T-201', type: 'Train', model: 'Siemens Velaro', cap: 350, status: 'Maintenance' },
                { id: 'V-1045', type: 'Bus', model: 'Mercedes Tourismo', cap: 52, status: 'Active' },
                { id: 'V-1048', type: 'Bus', model: 'Scania Irizar', cap: 44, status: 'Idle' },
                { id: 'T-204', type: 'Train', model: 'Alstom Coradia', cap: 280, status: 'Active' },
              ].map((vehicle, i) => (
                <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                  <td className="p-4 text-white font-mono">{vehicle.id}</td>
                  <td className="p-4 text-slate-300 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400">
                      {vehicle.type === 'Train' ? <Train size={16} /> : <Bus size={16} />}
                    </div>
                    <span className="font-medium">{vehicle.type}</span>
                  </td>
                  <td className="p-4 text-slate-300">{vehicle.model}</td>
                  <td className="p-4 text-slate-400">{vehicle.cap} seats</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${
                      vehicle.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                      vehicle.status === 'Maintenance' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                      'bg-slate-500/10 text-slate-400 border-slate-500/20'
                    }`}>
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-slate-400">
                      <button className="p-2 hover:text-white hover:bg-slate-700 rounded-lg transition-colors" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
