import { 
  UserPlus, Filter, Download, Edit, Trash2, 
  ChevronLeft, ChevronRight, History, Plus 
} from 'lucide-react';

export const AdminProfesoresPage = () => {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full">
      {/* Page Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-4xl font-extrabold font-headline text-on-surface tracking-tight mb-2">Profesores</h2>
          <p className="text-on-surface-variant font-medium text-sm">Gestiona el cuerpo docente, especialidades y disponibilidad del sistema.</p>
        </div>
        <button className="bg-linear-to-br from-diorama-primary to-diorama-primary-container text-on-diorama-primary px-5 py-2.5 rounded-md font-bold text-sm flex items-center gap-2 shadow-[0_4px_12px_rgba(171,199,255,0.3)] hover:-translate-y-px transition-transform">
          <UserPlus size={18} />
          Añadir Nuevo Profesor
        </button>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Docentes" value="124" subValue="+12% este mes" borderColor="border-diorama-primary" subColor="text-diorama-primary" />
        <StatCard title="Especialidades" value="18" subValue="Diversificado" borderColor="border-teal-400" subColor="text-teal-400" />
        <StatCard title="Activos Ahora" value="82" subValue="En sesión" borderColor="border-indigo-400" subColor="text-indigo-400" />
        <StatCard title="Pendientes" value="05" subValue="Validación" borderColor="border-diorama-error" subColor="text-diorama-error" />
      </div>

      {/* Dense DataTable Section */}
      <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl flex-1 flex flex-col">
        {/* Table Toolbar */}
        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-high/50">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded border border-white/5">
              <span className="text-xs text-outline-variant font-medium mr-2">Filtrar por:</span>
              <select className="bg-transparent border-none text-xs font-bold text-diorama-primary focus:ring-0 p-0 cursor-pointer outline-none">
                <option>Todas las Especialidades</option>
                <option>Ciencias</option>
                <option>Humanidades</option>
              </select>
            </div>
            <div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded border border-white/5">
              <span className="text-xs text-outline-variant font-medium mr-2">Estado:</span>
              <select className="bg-transparent border-none text-xs font-bold text-diorama-primary focus:ring-0 p-0 cursor-pointer outline-none">
                <option>Cualquiera</option>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"><Filter size={18} /></button>
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"><Download size={18} /></button>
          </div>
        </div>

        {/* The Actual Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/30 border-b border-white/5">
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Nombre del Profesor</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email Corporativo</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Especialidad</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Estado</th>
                <th className="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <TeacherRow initials="DR" bgInitials="bg-diorama-primary/20 text-diorama-primary border-diorama-primary/20" name="Daniel Rodriguez" id="#T-9821" email="d.rodriguez@eduadmin.com" spec="Matemáticas Avanzadas" status="ACTIVO" statusColor="bg-diorama-primary/10 text-diorama-primary border-diorama-primary/20" dotColor="bg-diorama-primary animate-pulse" />
              <TeacherRow initials="EM" bgInitials="bg-teal-500/20 text-teal-400 border-teal-500/20" name="Elena Martínez" id="#T-7742" email="e.martinez@eduadmin.com" spec="Literatura Moderna" status="ACTIVO" statusColor="bg-diorama-primary/10 text-diorama-primary border-diorama-primary/20" dotColor="bg-diorama-primary animate-pulse" />
              <TeacherRow initials="JV" bgInitials="bg-indigo-500/20 text-indigo-400 border-indigo-500/20" name="Javier Valenzuela" id="#T-6611" email="j.valenzuela@eduadmin.com" spec="Física Cuántica" status="LICENCIA" statusColor="bg-indigo-500/10 text-indigo-400 border-indigo-500/20" dotColor="bg-indigo-400" />
              <TeacherRow initials="RS" bgInitials="bg-diorama-error/20 text-diorama-error border-diorama-error/20" name="Roberto Sánchez" id="#T-3211" email="r.sanchez@eduadmin.com" spec="Ciencias Biológicas" status="INACTIVO" statusColor="bg-surface-container-highest text-on-surface-variant border-outline-variant/20" dotColor="bg-on-surface-variant" />
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-surface-container-high/20 border-t border-white/5 flex items-center justify-between mt-auto">
          <p className="text-xs text-on-surface-variant font-medium">Mostrando <span className="text-on-surface">1 - 4</span> de <span className="text-on-surface">124</span> profesores</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronLeft size={16} /></button>
            <button className="w-7 h-7 rounded bg-diorama-primary text-on-diorama-primary text-xs font-bold flex items-center justify-center">1</button>
            <button className="w-7 h-7 rounded border border-white/10 text-on-surface text-xs font-bold flex items-center justify-center hover:bg-white/5 transition-colors">2</button>
            <button className="w-7 h-7 rounded border border-white/10 text-on-surface text-xs font-bold flex items-center justify-center hover:bg-white/5 transition-colors">3</button>
            <span className="text-on-surface-variant mx-1">...</span>
            <button className="w-7 h-7 rounded border border-white/10 text-on-surface text-xs font-bold flex items-center justify-center hover:bg-white/5 transition-colors">25</button>
            <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      {/* Contextual Helper Panel */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface-container-low p-6 rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-headline font-bold text-on-surface mb-4">Auditoría de Acciones</h3>
            <div className="space-y-4">
              <AuditItem color="bg-diorama-primary/60" text="Perfil de Daniel R. actualizado" time="Hace 2 horas por Admin_01" />
              <AuditItem color="bg-teal-500/60" text="Nuevos horarios asignados a Especialidad Ciencias" time="Hace 5 horas por Sistema" />
            </div>
          </div>
          <History className="absolute -right-6 -bottom-6 text-white/5 w-40 h-40 pointer-events-none" />
        </div>

        <div className="bg-diorama-primary/5 p-6 rounded-2xl border border-diorama-primary/10 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-xl font-headline font-bold text-diorama-primary mb-3">Reporte Semanal de Carga</h3>
            <p className="text-on-surface-variant text-sm mb-6 max-w-sm">El 85% de la plantilla docente tiene una carga horaria optimizada según los estándares de la institución.</p>
            <div className="flex items-center gap-6">
              <div className="h-2 flex-1 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-diorama-primary w-[85%] rounded-full"></div>
              </div>
              <span className="text-lg font-bold text-on-surface">85%</span>
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="text-xs font-bold text-on-surface border-b border-diorama-primary pb-0.5 hover:text-diorama-primary transition-colors">Ver Detalles del Reporte</button>
          </div>
        </div>
      </div>

      {/* FAB - Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-diorama-primary text-on-diorama-primary shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Plus size={24} strokeWidth={3} />
      </button>
    </div>
  );
};

// --- Subcomponentes ---

const StatCard = ({ title, value, subValue, borderColor, subColor }: any) => (
  <div className={`bg-surface-container-low p-5 rounded-xl border-l-4 ${borderColor}`}>
    <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-bold font-headline text-on-surface">{value}</span>
      <span className={`${subColor} text-xs font-medium`}>{subValue}</span>
    </div>
  </div>
);

const TeacherRow = ({ initials, bgInitials, name, id, email, spec, status, statusColor, dotColor }: any) => (
  <tr className="hover:bg-white/3 transition-colors group">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border ${bgInitials}`}>{initials}</div>
        <div>
          <p className="text-sm font-bold text-on-surface leading-tight">{name}</p>
          <p className="text-[10px] text-on-surface-variant font-medium">ID: {id}</p>
        </div>
      </div>
    </td>
    <td className="px-6 py-4"><span className="text-sm text-on-surface-variant font-medium">{email}</span></td>
    <td className="px-6 py-4"><span className="text-xs font-semibold px-2 py-1 bg-surface-container-highest rounded-md text-on-surface">{spec}</span></td>
    <td className="px-6 py-4">
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${statusColor}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status}
      </span>
    </td>
    <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 hover:bg-white/10 rounded transition-colors text-on-surface-variant hover:text-on-surface"><Edit size={16} /></button>
        <button className="p-1.5 hover:bg-diorama-error/10 rounded transition-colors text-on-surface-variant hover:text-diorama-error"><Trash2 size={16} /></button>
      </div>
    </td>
  </tr>
);

const AuditItem = ({ color, text, time }: any) => (
  <div className="flex gap-4 items-start">
    <div className={`w-1 h-10 rounded-full mt-1 ${color}`}></div>
    <div>
      <p className="text-sm text-on-surface leading-tight font-semibold">{text}</p>
      <p className="text-xs text-on-surface-variant mt-1">{time}</p>
    </div>
  </div>
);