import { Search, Bell, Settings } from 'lucide-react';

export const AdminTopbar = () => {
  return (
    <header className="fixed top-0 right-0 left-64 z-50 h-16 bg-surface-container-low border-b border-surface-container-highest flex items-center justify-between px-8">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-diorama-primary transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Búsqueda global..." 
            className="w-full bg-surface-container-lowest border-none rounded-lg pl-10 pr-4 py-2 text-sm text-on-surface placeholder:text-on-surface-variant focus:ring-1 focus:ring-diorama-primary/40 transition-all outline-none" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant hover:text-diorama-primary">
          <Bell size={20} />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-on-surface-variant hover:text-diorama-primary">
          <Settings size={20} />
        </button>
        
        <div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface leading-none group-hover:text-diorama-primary transition-colors">Admin Profile</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">Super User</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-diorama-primary-container border border-outline-variant group-hover:border-diorama-primary transition-all flex items-center justify-center text-on-diorama-primary font-bold text-sm">
            AP
          </div>
        </div>
      </div>
    </header>
  );
};