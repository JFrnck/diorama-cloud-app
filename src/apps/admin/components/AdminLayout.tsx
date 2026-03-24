import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminTopbar } from './AdminTopbar';

export const AdminLayout = () => {
  return (
    <div className="bg-surface text-on-surface min-h-screen overflow-x-hidden font-sans">
      <AdminSidebar />
      <AdminTopbar />
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};