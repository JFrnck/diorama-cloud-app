import { 
  Plus, Filter, Download, Edit2, Trash2, 
  ChevronLeft, ChevronRight, BookOpen, 
  Layers, CheckCircle2, AlertCircle 
} from 'lucide-react';

export const AdminCursosPage = () => {
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <section className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Catálogo de Cursos</h2>
          <p className="text-on-surface-variant font-medium text-sm">Gestión de asignaturas, malla curricular y carga horaria institucional.</p>
        </div>
        <button className="flex items-center gap-2 bg-linear-to-br from-diorama-primary to-diorama-primary-container text-on-diorama-primary px-6 py-2.5 rounded-md font-bold text-sm shadow-[0_4px_14px_0_rgba(171,199,255,0.39)] hover:scale-[1.02] transition-transform">
          <Plus size={18} strokeWidth={3} />
          Nuevo Curso
        </button>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<BookOpen size={20} />} title="Total de Cursos" value="42" desc="Malla activa" colorClass="text-diorama-primary bg-diorama-primary/20" />
        <StatCard icon={<Layers size={20} />} title="Áreas Académicas" value="06" desc="Especialidades" colorClass="text-indigo-400 bg-indigo-500/20" />
        <StatCard icon={<CheckCircle2 size={20} />} title="Cursos Vigentes" value="39" desc="Listos para dictar" colorClass="text-emerald-400 bg-emerald-500/20" />
        <StatCard icon={<AlertCircle size={20} />} title="En Revisión" value="03" desc="Malla por aprobar" colorClass="text-amber-400 bg-amber-500/20" />
      </div>

      {/* Main Table Card */}
      <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl flex-1 flex flex-col border border-white/5">
        
        {/* Table Toolbar */}
        <div className="px-6 py-4 flex items-center justify-between bg-surface-container-high/50 border-b border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded border border-white/5">
              <span className="text-xs text-outline-variant font-medium mr-2">Área Académica:</span>
              <select className="bg-transparent border-none text-xs font-bold text-diorama-primary focus:ring-0 p-0 cursor-pointer outline-none">
                <option>Todas las Áreas</option>
                <option>Ciencias</option>
                <option>Humanidades</option>
                <option>Idiomas</option>
                <option>Tecnología</option>
              </select>
            </div>
            <div className="flex items-center bg-surface-container-lowest px-3 py-1.5 rounded border border-white/5">
              <span className="text-xs text-outline-variant font-medium mr-2">Nivel:</span>
              <select className="bg-transparent border-none text-xs font-bold text-diorama-primary focus:ring-0 p-0 cursor-pointer outline-none">
                <option>Todos los Niveles</option>
                <option>Primaria</option>
                <option>Secundaria</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"><Filter size={18} /></button>
            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors"><Download size={18} /></button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-high/30">
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Código</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Curso</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Área</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Créditos/Horas</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Estado</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <CourseRow 
                code="MAT-100" name="Razonamiento Matemático" level="Obligatorio • Primaria" 
                area="Ciencias" areaColor="bg-blue-500/10 text-blue-400" 
                hours="6 hrs / semanales" 
                status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
              />
              <CourseRow 
                code="COM-110" name="Comunicación Integral" level="Obligatorio • Primaria" 
                area="Humanidades" areaColor="bg-purple-500/10 text-purple-400" 
                hours="8 hrs / semanales" 
                status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
              />
              <CourseRow 
                code="ING-050" name="Inglés Interactivo" level="Electivo • Primaria" 
                area="Idiomas" areaColor="bg-amber-500/10 text-amber-400" 
                hours="4 hrs / semanales" 
                status="Revisión" statusColor="bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" 
              />
              <CourseRow 
                code="FIS-200" name="Física Elemental" level="Obligatorio • Secundaria" 
                area="Ciencias" areaColor="bg-blue-500/10 text-blue-400" 
                hours="4 hrs / semanales" 
                status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
              />
              <CourseRow 
                code="TEC-101" name="Computación y Robótica" level="Taller • Ambos" 
                area="Tecnología" areaColor="bg-teal-500/10 text-teal-400" 
                hours="2 hrs / semanales" 
                status="Vigente" statusColor="bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" 
              />
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="px-6 py-4 bg-surface-container-high/20 border-t border-white/5 flex items-center justify-between mt-auto">
          <p className="text-xs text-on-surface-variant font-medium">Mostrando <span className="text-on-surface">1 - 5</span> de <span className="text-on-surface">42</span> cursos</p>
          <div className="flex items-center gap-2">
            <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronLeft size={16} /></button>
            <button className="w-7 h-7 rounded bg-diorama-primary text-on-diorama-primary text-xs font-bold flex items-center justify-center">1</button>
            <button className="w-7 h-7 rounded border border-white/10 text-on-surface text-xs font-bold flex items-center justify-center hover:bg-white/5 transition-colors">2</button>
            <span className="text-on-surface-variant mx-1">...</span>
            <button className="w-7 h-7 rounded border border-white/10 text-on-surface text-xs font-bold flex items-center justify-center hover:bg-white/5 transition-colors">5</button>
            <button className="p-1.5 border border-white/10 rounded hover:bg-white/5 transition-colors text-on-surface-variant"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Subcomponentes ---

const StatCard = ({ icon, title, value, desc, colorClass }: any) => (
  <div className="bg-surface-container-low p-5 rounded-xl border border-white/5 flex items-start gap-4 hover:bg-surface-container-highest/50 transition-colors">
    <div className={`p-3 rounded-lg ${colorClass}`}>
      {icon}
    </div>
    <div>
      <p className="text-on-surface-variant text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold font-headline text-on-surface">{value}</span>
      </div>
      <p className="text-[10px] text-on-surface-variant mt-1">{desc}</p>
    </div>
  </div>
);

const CourseRow = ({ code, name, level, area, areaColor, hours, status, statusColor }: any) => (
  <tr className="hover:bg-white/3 transition-colors group cursor-default">
    <td className="px-6 py-4 text-xs font-mono text-diorama-primary font-bold">{code}</td>
    <td className="px-6 py-4">
      <div className="font-bold text-on-surface leading-tight">{name}</div>
      <div className="text-[10px] text-on-surface-variant mt-0.5">{level}</div>
    </td>
    <td className="px-6 py-4">
      <span className={`px-2 py-1 rounded text-[10px] font-bold ${areaColor}`}>{area}</span>
    </td>
    <td className="px-6 py-4 text-sm text-on-surface font-medium">{hours}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
        <span className="text-xs text-on-surface font-bold">{status}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-right">
      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1.5 hover:bg-diorama-primary/20 rounded text-on-surface-variant hover:text-diorama-primary transition-colors">
          <Edit2 size={16} />
        </button>
        <button className="p-1.5 hover:bg-diorama-error/20 rounded text-on-surface-variant hover:text-diorama-error transition-colors">
          <Trash2 size={16} />
        </button>
      </div>
    </td>
  </tr>
);