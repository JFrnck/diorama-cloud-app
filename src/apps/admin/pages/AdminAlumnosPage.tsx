import { 
  Plus, Edit, Trash2, ChevronLeft, ChevronRight, 
  BadgeCheck, FileDown 
} from 'lucide-react';

export const AdminAlumnosPage = () => {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full">
      {/* Page Header */}
      <section className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Gestión de Alumnos</h2>
          <p className="text-on-surface-variant font-medium text-sm">Administra la base de datos de estudiantes y su rendimiento académico.</p>
        </div>
        <button className="flex items-center gap-2 bg-linear-to-br from-diorama-primary to-diorama-primary-container text-on-diorama-primary px-6 py-2.5 rounded-md font-bold text-sm shadow-[0_4px_14px_0_rgba(171,199,255,0.39)] hover:scale-[1.02] transition-transform">
          <Plus size={18} strokeWidth={3} />
          Nuevo Alumno
        </button>
      </section>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        
        {/* Left Column (Table Area) */}
        <div className="lg:col-span-9 bg-surface-container p-6 rounded-xl shadow-lg border border-white/5 flex flex-col">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <FilterSelect label="Grado" options={["Todos los grados", "1º Primaria", "2º Primaria", "3º Primaria", "4º Secundaria"]} />
            <FilterSelect label="Sección" options={["Todas las secciones", "Sección A", "Sección B", "Sección C"]} />
            
            <div className="flex-1 min-w-50">
              <label className="block text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1.5">Estado Académico</label>
              <div className="flex gap-2">
                <button className="bg-diorama-primary/20 text-diorama-primary px-3 py-1.5 rounded-md text-xs font-bold border border-diorama-primary/30">Activos</button>
                <button className="bg-surface-container-highest text-on-surface-variant px-3 py-1.5 rounded-md text-xs font-medium border border-transparent hover:border-white/10 transition-all">En Riesgo</button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-separate border-spacing-y-2">
              <thead>
                <tr className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                  <th className="px-4 py-2">Alumno</th>
                  <th className="px-4 py-2">Grado</th>
                  <th className="px-4 py-2">Sección</th>
                  <th className="px-4 py-2">Apoderado</th>
                  <th className="px-4 py-2">Estado</th>
                  <th className="px-4 py-2 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <StudentRow 
                  initials="AM" bgAvatar="bg-indigo-500/20 text-indigo-400" 
                  name="Alejandro Morales" id="#2024-001" 
                  grade="4º Secundaria" section="SECCIÓN B" sectionColor="text-teal-400 bg-teal-500/20" 
                  parent="Lucía Morales" 
                  status="Sobresaliente" statusColor="text-[#4ade80]" dotColor="bg-[#4ade80]"
                />
                <StudentRow 
                  initials="CV" bgAvatar="bg-diorama-primary/20 text-diorama-primary" 
                  name="Camila Vargas" id="#2024-042" 
                  grade="1º Primaria" section="SECCIÓN A" sectionColor="text-diorama-primary bg-diorama-primary/20" 
                  parent="Roberto Vargas" 
                  status="Regular" statusColor="text-diorama-primary" dotColor="bg-diorama-primary"
                />
                <StudentRow 
                  initials="DO" bgAvatar="bg-diorama-error/20 text-diorama-error" 
                  name="Daniel Ortega" id="#2024-115" 
                  grade="3º Primaria" section="SECCIÓN C" sectionColor="text-indigo-400 bg-indigo-500/20" 
                  parent="Maria Castillo" 
                  status="En Riesgo" statusColor="text-diorama-error" dotColor="bg-diorama-error"
                />
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-on-surface-variant font-medium">Mostrando <span className="text-on-surface">1-3</span> de <span className="text-on-surface">1,240</span> alumnos</p>
            <div className="flex gap-2">
              <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronLeft size={16} /></button>
              <button className="w-7 h-7 flex items-center justify-center bg-diorama-primary text-on-diorama-primary font-bold rounded-md text-xs">1</button>
              <button className="w-7 h-7 flex items-center justify-center text-on-surface-variant border border-white/10 hover:text-on-surface hover:bg-white/5 rounded-md text-xs transition-colors">2</button>
              <button className="w-7 h-7 flex items-center justify-center text-on-surface-variant border border-white/10 hover:text-on-surface hover:bg-white/5 rounded-md text-xs transition-colors">3</button>
              <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        {/* Right Column (Widgets) */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Stats Widget */}
          <div className="bg-linear-to-br from-surface-container-high to-surface-container p-6 rounded-xl border border-white/5">
            <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Estadísticas Rápidas</h3>
            <div className="space-y-4">
              <StatProgressBar label="Asistencia Promedio" value="94.2%" percent="94%" colorClass="bg-diorama-primary" textClass="text-diorama-primary" />
              <StatProgressBar label="Alumnos en Riesgo" value="12" percent="12%" colorClass="bg-diorama-error" textClass="text-diorama-error" />
              <StatProgressBar label="Retiro Escolar" value="0.5%" percent="5%" colorClass="bg-teal-400" textClass="text-teal-400" />
            </div>
          </div>

          {/* Activity Widget */}
          <div className="bg-surface-container p-6 rounded-xl border border-white/5">
            <h3 className="font-headline font-bold text-sm mb-4 uppercase tracking-wider text-on-surface-variant">Actividad Reciente</h3>
            <ul className="space-y-4">
              <ActivityItem dotColor="bg-diorama-primary" title="Inscripción Exitosa" desc="Sofía Méndez • Hace 10 min" />
              <ActivityItem dotColor="bg-diorama-error" title="Alerta Académica" desc="Pedro Castillo • Hace 2 horas" />
              <ActivityItem dotColor="bg-teal-400" title="Cambio de Sección" desc="Andrés López • Hace 5 horas" />
            </ul>
            <button className="w-full mt-6 text-xs text-diorama-primary font-bold hover:underline">Ver todo el historial</button>
          </div>

          {/* Promo Widget */}
          <div className="bg-diorama-primary/10 p-6 rounded-xl border border-diorama-primary/20 relative overflow-hidden group">
            <div className="relative z-10">
              <BadgeCheck className="text-diorama-primary mb-2" size={24} />
              <h4 className="font-bold text-sm mb-1 text-on-surface">Certificaciones 2024</h4>
              <p className="text-xs text-on-surface-variant/80">Ya puedes descargar los reportes semestrales para padres.</p>
              <button className="mt-4 bg-on-surface text-surface text-[10px] font-extrabold px-4 py-2 rounded-full uppercase tracking-tighter hover:bg-diorama-primary transition-colors">Generar PDF</button>
            </div>
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <FileDown size={100} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Subcomponentes ---

const FilterSelect = ({ label, options }: { label: string, options: string[] }) => (
  <div className="flex-1 min-w-50">
    <label className="block text-[10px] font-bold text-outline-variant uppercase tracking-widest mb-1.5">{label}</label>
    <select className="w-full bg-surface-container-lowest border border-white/10 text-on-surface text-sm rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-diorama-primary focus:border-diorama-primary transition-all cursor-pointer">
      {options.map((opt, i) => <option key={i}>{opt}</option>)}
    </select>
  </div>
);

const StudentRow = ({ initials, bgAvatar, name, id, grade, section, sectionColor, parent, status, statusColor, dotColor }: any) => (
  <tr className="group hover:bg-surface-container-highest/50 transition-all cursor-default">
    <td className="px-4 py-3 bg-surface-container-highest/30 rounded-l-xl">
      <div className="flex items-center gap-3">
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center font-bold text-xs ${bgAvatar}`}>
          {initials}
        </div>
        <div>
          <div className="font-bold text-on-surface leading-tight">{name}</div>
          <div className="text-[10px] text-on-surface-variant font-medium mt-0.5">ID: {id}</div>
        </div>
      </div>
    </td>
    <td className="px-4 py-3 bg-surface-container-highest/30 text-on-surface-variant font-medium">{grade}</td>
    <td className="px-4 py-3 bg-surface-container-highest/30">
      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${sectionColor}`}>{section}</span>
    </td>
    <td className="px-4 py-3 bg-surface-container-highest/30 text-on-surface-variant font-medium">{parent}</td>
    <td className="px-4 py-3 bg-surface-container-highest/30">
      <span className={`flex items-center gap-1.5 text-xs font-bold ${statusColor}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> {status}
      </span>
    </td>
    <td className="px-4 py-3 bg-surface-container-highest/30 rounded-r-xl text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 hover:bg-diorama-primary/20 text-on-surface-variant hover:text-diorama-primary rounded-md transition-all"><Edit size={16} /></button>
        <button className="p-1.5 hover:bg-diorama-error/20 text-on-surface-variant hover:text-diorama-error rounded-md transition-all"><Trash2 size={16} /></button>
      </div>
    </td>
  </tr>
);

const StatProgressBar = ({ label, value, percent, colorClass, textClass }: any) => (
  <div>
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm text-on-surface-variant font-medium">{label}</span>
      <span className={`font-bold ${textClass}`}>{value}</span>
    </div>
    <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
      <div className={`h-full ${colorClass}`} style={{ width: percent }}></div>
    </div>
  </div>
);

const ActivityItem = ({ dotColor, title, desc }: any) => (
  <li className="flex gap-3 items-start">
    <div className={`w-2 h-2 rounded-full mt-1.5 ${dotColor}`}></div>
    <div>
      <p className="text-xs font-bold text-on-surface">{title}</p>
      <p className="text-[10px] text-on-surface-variant mt-0.5">{desc}</p>
    </div>
  </li>
);