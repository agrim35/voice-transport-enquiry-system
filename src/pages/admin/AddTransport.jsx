import { Save, X } from 'lucide-react';

export default function AddTransport() {
  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Add New Transport</h1>
        <p className="text-slate-400 text-sm mt-1">Register a new vehicle into the system.</p>
      </div>

      <div className="card">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Vehicle Type</label>
              <select className="input">
                <option>Select Type...</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="ferry">Ferry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Registration Number</label>
              <input type="text" className="input" placeholder="e.g. V-1092" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Make / Model</label>
              <input type="text" className="input" placeholder="e.g. Volvo 9900" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Capacity (Seats)</label>
              <input type="number" className="input" placeholder="e.g. 48" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Initial Status</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" className="text-primary-500 focus:ring-primary-500 bg-slate-800 border-slate-600" defaultChecked />
                <span className="text-sm text-slate-300">Active</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="status" className="text-primary-500 focus:ring-primary-500 bg-slate-800 border-slate-600" />
                <span className="text-sm text-slate-300">Maintenance</span>
              </label>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Additional Notes</label>
            <textarea className="input min-h-[100px]" placeholder="Any special amenities or remarks..."></textarea>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end gap-4 mt-8">
            <button type="button" className="btn-secondary flex items-center gap-2">
              <X size={18} /> Cancel
            </button>
            <button type="button" className="btn-primary flex items-center gap-2">
              <Save size={18} /> Save Transport
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
