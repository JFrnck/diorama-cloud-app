import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, Users, BookOpen, Network, UsersRound, BarChart3, HelpCircle, Settings, LogOut } from 'lucide-react';

export const AdminSidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);

  return (
    <aside className="h-screen w-64 flex flex-col fixed top-0 left-0 bg-surface-container-low shadow-[20px_0_40px_rgba(0,0,0,0.45)] py-6 justify-between z-60">
      <div className="flex flex-col">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-diorama-primary-container flex items-center justify-center text-on-diorama-primary font-bold">DI</div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-on-surface">DIORAMA</h1>
            <p className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">Management System</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col">
          <Link to="/admin/dashboard" className={`flex items-center gap-3 px-6 py-3 transition-all duration-200 active:scale-95 ${isActive('dashboard') ? 'text-diorama-primary font-bold border-r-2 border-diorama-primary bg-surface-container shadow-[0_0_10px_rgba(171,199,255,0.1)]' : 'text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface'}`}>
            <LayoutDashboard size={20} />
            <span className="text-[0.75rem]">Dashboard</span>
          </Link>
          <Link to="/admin/profesores" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <GraduationCap size={20} />
            <span className="text-[0.75rem]">Profesores</span>
          </Link>
          <Link to="/admin/alumnos" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <Users size={20} />
            <span className="text-[0.75rem]">Alumnos</span>
          </Link>
          <Link to="/admin/cursos" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <BookOpen size={20} />
            <span className="text-[0.75rem]">Cursos</span>
          </Link>
          <Link to="/admin/estructura" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <Network size={20} />
            <span className="text-[0.75rem]">Estructura</span>
          </Link>
          <Link to="/admin/padres" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <UsersRound size={20} />
            <span className="text-[0.75rem]">Padres</span>
          </Link>
          <Link to="/admin/reportes" className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all">
            <BarChart3 size={20} />
            <span className="text-[0.75rem]">Reportes</span>
          </Link>
        </nav>
      </div>

      <div className="flex flex-col border-t border-surface-container-highest pt-4">
        <button className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all w-full text-left">
          <HelpCircle size={20} />
          <span className="text-[0.75rem]">Soporte</span>
        </button>
        <button className="flex items-center gap-3 px-6 py-3 text-on-surface-variant font-medium hover:bg-surface-container-highest hover:text-on-surface active:scale-95 transition-all w-full text-left">
          <Settings size={20} />
          <span className="text-[0.75rem]">Configuración</span>
        </button>
        <button className="flex items-center gap-3 px-6 py-3 text-diorama-error font-medium hover:bg-surface-container-highest active:scale-95 transition-all w-full text-left">
          <LogOut size={20} />
          <span className="text-[0.75rem]">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
};