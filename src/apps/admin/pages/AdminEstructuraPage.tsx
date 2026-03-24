import { 
  PlusCircle, Network, Baby, BookA, ChevronRight, 
  BarChart2, LayoutGrid, BookOpen, CalendarDays, 
  ExternalLink, Plus, Filter, Download, Edit2 
} from 'lucide-react';

export const AdminEstructuraPage = () => {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="font-headline text-5xl font-extrabold text-on-surface tracking-tight leading-none mb-2">Estructura Académica</h2>
          <p className="text-on-surface-variant font-body text-lg">Gestión centralizada de cursos, grados y secciones institucionales.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-highest text-on-surface px-5 py-2.5 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-surface-container transition-all">
            <PlusCircle size={18} />
            Nuevo Curso
          </button>
          <button className="bg-linear-to-br from-diorama-primary to-diorama-primary-container text-on-diorama-primary px-6 py-2.5 rounded-md font-bold text-sm flex items-center gap-2 shadow-lg shadow-diorama-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
            <Network size={18} />
            Configurar Niveles
          </button>
        </div>
      </div>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12">
        
        {/* Left: Navigation & Summary (Bento) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Level Selector Card */}
          <div className="bg-surface-container-low rounded-xl p-6 border-t border-white/5">
            <h3 className="text-sm font-bold text-diorama-primary uppercase tracking-widest mb-4">Niveles Educativos</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 rounded-lg bg-diorama-primary/10 border border-diorama-primary/20 text-on-surface group transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-diorama-primary/20 rounded-md text-diorama-primary">
                    <Baby size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold">Primaria</div>
                    <div className="text-xs text-on-surface-variant">6 Grados • 18 Secciones</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-diorama-primary" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-lg hover:bg-white/5 transition-colors group border border-transparent">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-surface-container-highest rounded-md text-on-surface-variant">
                    <BookA size={20} />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-on-surface-variant group-hover:text-on-surface transition-colors">Secundaria</div>
                    <div className="text-xs text-on-surface-variant">5 Grados • 15 Secciones</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-outline-variant" />
              </button>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bg-surface-container rounded-xl p-6 relative overflow-hidden group border-t border-white/5">
            <div className="absolute -right-8 -bottom-8 opacity-5 rotate-12 transition-transform group-hover:scale-110 pointer-events-none">
              <BarChart2 size={150} />
            </div>
            <h3 className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-6 relative z-10">Resumen Académico</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <StatMiniBox value="42" label="Cursos Activos" />
              <StatMiniBox value="128" label="Docentes" />
              <StatMiniBox value="92%" label="Ocupación" />
              <StatMiniBox value="3" label="Turnos" />
            </div>
          </div>
        </div>

        {/* Right: Content Display (Grados y Secciones) */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-surface-container rounded-xl overflow-hidden border-t border-white/5">
            {/* Tabs Header */}
            <div className="flex border-b border-white/10 px-6 pt-6 overflow-x-auto">
              <button className="px-6 py-4 text-diorama-primary border-b-2 border-diorama-primary font-bold text-sm shadow-[0_4px_10px_-4px_#abc7ff] flex items-center gap-2 whitespace-nowrap">
                <LayoutGrid size={18} /> Grados y Secciones
              </button>
              <button className="px-6 py-4 text-on-surface-variant font-medium text-sm hover:text-on-surface transition-colors flex items-center gap-2 whitespace-nowrap">
                <BookOpen size={18} /> Malla Curricular
              </button>
              <button className="px-6 py-4 text-on-surface-variant font-medium text-sm hover:text-on-surface transition-colors flex items-center gap-2 whitespace-nowrap">
                <CalendarDays size={18} /> Horarios Base
              </button>
            </div>

            {/* Content Grid (Degrees) */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DegreeCard 
                  title="1er Grado Primaria" tutor="Mg. Elena Rojas" shift="Mañana" shiftColor="bg-[#2e4b68] text-[#acc9eb]"
                  sections={[{name: 'A', color: 'bg-emerald-500'}, {name: 'B', color: 'bg-emerald-500'}, {name: 'C', color: 'bg-amber-500'}]}
                  studentsCount={24} initials={['AM', 'BR', 'CL']}
                />
                <DegreeCard 
                  title="2do Grado Primaria" tutor="Lic. Roberto García" shift="Mañana" shiftColor="bg-[#2e4b68] text-[#acc9eb]"
                  sections={[{name: 'A', color: 'bg-emerald-500'}, {name: 'B', color: 'bg-emerald-500'}]}
                  studentsCount={18} initials={['DR', 'EV']}
                />
                <DegreeCard 
                  title="3er Grado Primaria" tutor="Mg. Clara Luna" shift="Tarde" shiftColor="bg-surface-variant text-on-surface-variant"
                  sections={[{name: 'A', color: 'bg-emerald-500'}, {name: 'B', color: 'bg-rose-500'}]}
                  studentsCount={21} initials={['FG', 'HI']}
                />

                {/* Add New Degree Card */}
                <button className="bg-surface-container-low rounded-lg p-5 border-2 border-dashed border-outline-variant hover:border-diorama-primary/50 hover:bg-white/5 transition-all flex flex-col items-center justify-center text-on-surface-variant hover:text-diorama-primary gap-2 group min-h-45">
                  <PlusCircle size={32} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm font-bold uppercase tracking-widest">Añadir Grado</span>
                </button>
              </div>
            </div>
          </div>

          {/* Course Catalog (Table Style) */}
          <div className="bg-surface-container rounded-xl overflow-hidden border-t border-white/5">
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <h3 className="text-xl font-bold font-headline text-on-surface">Malla Curricular - Primaria</h3>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/5 rounded-md text-on-surface-variant transition-colors"><Filter size={18} /></button>
                <button className="p-2 hover:bg-white/5 rounded-md text-on-surface-variant transition-colors"><Download size={18} /></button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-high">
                    <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-outline-variant">Código</th>
                    <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-outline-variant">Curso</th>
                    <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-outline-variant">Área</th>
                    <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-outline-variant">Créditos/Horas</th>
                    <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-outline-variant">Estado</th>
                    <th className="px-6 py-3 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <CourseRow code="MAT-100" name="Razonamiento Matemático" level="Obligatorio • Nivel 1" area="Ciencias" areaColor="bg-blue-500/10 text-blue-400" hours="6 hrs / semanales" status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <CourseRow code="COM-110" name="Comunicación Integral" level="Obligatorio • Nivel 1" area="Humanidades" areaColor="bg-purple-500/10 text-purple-400" hours="8 hrs / semanales" status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <CourseRow code="ING-050" name="Inglés Interactivo" level="Electivo • Nivel 2" area="Idiomas" areaColor="bg-amber-500/10 text-amber-400" hours="4 hrs / semanales" status="Revisión" statusColor="bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                </tbody>
              </table>
            </div>
            
            <div className="p-4 bg-surface-container-low flex justify-center">
              <button className="text-diorama-primary text-xs font-bold hover:underline">Cargar más cursos</button>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-linear-to-br from-diorama-primary to-diorama-primary-container rounded-full text-on-diorama-primary shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
        <Plus size={24} strokeWidth={3} />
      </button>
    </div>
  );
};

// --- Subcomponentes ---

const StatMiniBox = ({ value, label }: { value: string, label: string }) => (
  <div className="bg-surface-container-low p-4 rounded-lg">
    <div className="text-3xl font-extrabold font-headline text-on-surface">{value}</div>
    <div className="text-[10px] uppercase font-bold text-outline-variant">{label}</div>
  </div>
);

const DegreeCard = ({ title, tutor, shift, shiftColor, sections, studentsCount, initials }: any) => (
  <div className="bg-surface-container-low rounded-lg p-5 border border-transparent hover:border-diorama-primary/20 transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h4 className="text-lg font-extrabold font-headline text-on-surface group-hover:text-diorama-primary transition-colors">{title}</h4>
        <p className="text-xs text-on-surface-variant">Tutoría: {tutor}</p>
      </div>
      <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter ${shiftColor}`}>
        {shift}
      </span>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-6">
      {sections.map((sec: any, i: number) => (
        <div key={i} className="px-3 py-1.5 bg-surface-container-highest rounded text-xs font-medium text-on-surface flex items-center gap-2">
          Sección {sec.name} <span className={`w-1.5 h-1.5 rounded-full ${sec.color}`}></span>
        </div>
      ))}
    </div>
    
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <div className="flex -space-x-2">
        {initials.map((ini: string, i: number) => (
          <div key={i} className="w-7 h-7 rounded-full bg-surface-container-high border-2 border-surface-container-low flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
            {ini}
          </div>
        ))}
        <div className="w-7 h-7 rounded-full bg-surface-bright flex items-center justify-center text-[9px] font-bold border-2 border-surface-container-low text-diorama-primary">
          +{studentsCount}
        </div>
      </div>
      <button className="text-diorama-primary text-xs font-bold flex items-center gap-1 hover:underline">
        Ver detalles <ExternalLink size={14} />
      </button>
    </div>
  </div>
);

const CourseRow = ({ code, name, level, area, areaColor, hours, status, statusColor }: any) => (
  <tr className="hover:bg-surface-container-highest transition-colors group">
    <td className="px-6 py-4 text-xs font-mono text-diorama-primary font-bold">{code}</td>
    <td className="px-6 py-4">
      <div className="font-bold text-on-surface">{name}</div>
      <div className="text-[10px] text-on-surface-variant">{level}</div>
    </td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-[10px] font-bold ${areaColor}`}>{area}</span>
    </td>
    <td className="px-6 py-4 text-sm text-on-surface">{hours}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
        <span className="text-xs text-on-surface">{status}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-right">
      <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-diorama-primary/20 rounded text-diorama-primary">
        <Edit2 size={16} />
      </button>
    </td>
  </tr>
);