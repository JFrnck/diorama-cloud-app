import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminLayout } from '../apps/admin/components/AdminLayout';
import { AdminDashboardPage } from '../apps/admin/pages/AdminDashboardPage';

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/admin/dashboard" replace />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboardPage />,
      },
      // Aquí agregaremos las demás páginas de admin después:
      // { path: "profesores", element: <ProfesoresPage /> }
    ],
  },
]);