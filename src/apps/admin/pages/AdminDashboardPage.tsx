import { Users, CheckCircle2, UserPlus, AlertCircle, Filter, Plus, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export const AdminDashboardPage = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-10">
        <h2 className="text-5xl font-extrabold text-on-surface tracking-tighter mb-2">Visión General</h2>
        <p className="text-on-surface-variant max-w-2xl text-sm">Monitoreo de rendimiento institucional y gestión operativa en tiempo real.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KPICard icon={<Users size={20} className="text-[#abc7ff]" />} bgIcon="bg-[#448fff]/20" badgeText="+12%" badgeColor="text-[#abc7ff] bg-[#abc7ff]/10" title="Total Alumnos" value="1240" />
        <KPICard icon={<CheckCircle2 size={20} className="text-[#a4c9ff]" />} bgIcon="bg-[#4993e9]/20" badgeText="Active" badgeColor="text-[#a4c9ff] bg-[#a4c9ff]/10" title="Asistencia Hoy" value="98%" />
        <KPICard icon={<UserPlus size={20} className="text-[#acc9eb]" />} bgIcon="bg-[#2e4b68]/20" badgeText="MTD" badgeColor="text-[#acc9eb] bg-[#acc9eb]/10" title="Nuevos Registros" value="45" />
        <KPICard icon={<AlertCircle size={20} className="text-[#ffb4ab]" />} bgIcon="bg-[#93000a]/20" badgeText="Urgent" badgeColor="text-[#ffb4ab] bg-[#ffb4ab]/10" title="Reportes Pendientes" value="12" />
      </div>

      <section className="bg-surface-container rounded-xl overflow-hidden shadow-xl border-t border-white/5">
        <div className="flex items-center justify-between border-b border-outline-variant/10 px-8 py-4">
          <div className="flex items-center gap-8">
            <button className="relative py-2 text-diorama-primary font-bold text-sm tracking-wide">
              Profesores
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-diorama-primary shadow-[0_0_10px_#abc7ff]"></span>
            </button>
            <button className="py-2 text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-wide transition-colors">Alumnos</button>
            <button className="py-2 text-on-surface-variant hover:text-on-surface font-medium text-sm tracking-wide transition-colors">Asignaturas</button>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-surface-container-high text-on-surface-variant hover:text-on-surface p-2 rounded-lg transition-colors"><Filter size={18} /></button>
            <button className="bg-gradient-to-r from-[#abc7ff] to-[#448fff] text-[#002f66] px-4 py-2 rounded-md font-bold text-xs flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"><Plus size={16} /> NUEVO REGISTRO</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Nombre</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Email</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Rol</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Estado</th>
                <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              <TableRow initials="CM" bgInitials="bg-[#2e4b68] text-[#acc9eb]" name="Carlos Mendoza" email="c.mendoza@institution.edu" role="Catedrático" status="Activo" statusColor="text-[#abc7ff] bg-[#abc7ff]/10" dotColor="bg-[#abc7ff]" />
              <TableRow initials="AR" bgInitials="bg-[#4993e9] text-[#002a51]" name="Ana Rodriguez" email="a.rodriguez@institution.edu" role="Investigación" status="Activo" statusColor="text-[#a4c9ff] bg-[#a4c9ff]/10" dotColor="bg-[#a4c9ff]" />
              <TableRow initials="JS" bgInitials="bg-[#414754] text-[#e0e3e8]" name="Juan Soto" email="j.soto@institution.edu" role="Adjunto" status="Inactivo" statusColor="text-on-surface-variant bg-outline-variant/20" dotColor="bg-on-surface-variant" />
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between px-8 py-4 bg-surface-container-low">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Página 1 de 12</p>
          <div className="flex gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container border border-outline-variant/10 text-on-surface-variant cursor-not-allowed"><ChevronLeft size={16} /></button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container border border-outline-variant/10 text-on-surface hover:text-diorama-primary transition-colors"><ChevronRight size={16} /></button>
          </div>
        </div>
      </section>
    </div>
  );
};

const KPICard = ({ icon, bgIcon, badgeText, badgeColor, title, value }: any) => (
  <div className="bg-surface-container p-6 rounded-xl border-t border-white/5 hover:bg-surface-container-high transition-colors">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2 rounded-lg ${bgIcon}`}>{icon}</div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase ${badgeColor}`}>{badgeText}</span>
    </div>
    <h3 className="text-sm font-medium text-on-surface-variant uppercase tracking-wider mb-1">{title}</h3>
    <div className="flex items-baseline gap-2"><span className="text-3xl font-black text-diorama-primary">{value}</span></div>
  </div>
);

const TableRow = ({ initials, bgInitials, name, email, role, status, statusColor, dotColor }: any) => (
  <tr className="group hover:bg-surface-container-highest/30 transition-colors">
    <td className="px-8 py-4">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${bgInitials}`}>{initials}</div>
        <span className="text-sm font-semibold text-on-surface">{name}</span>
      </div>
    </td>
    <td className="px-8 py-4 text-sm text-on-surface-variant">{email}</td>
    <td className="px-8 py-4"><span className="text-[10px] font-bold px-2 py-0.5 bg-surface-variant rounded text-on-surface-variant uppercase tracking-wider">{role}</span></td>
    <td className="px-8 py-4"><span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest ${statusColor}`}><span className={`w-1 h-1 rounded-full ${dotColor}`}></span> {status}</span></td>
    <td className="px-8 py-4 text-right"><button className="text-on-surface-variant hover:text-diorama-primary transition-colors"><MoreVertical size={18} /></button></td>
  </tr>
);