import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminLayout } from '../apps/admin/components/AdminLayout';
import { AdminDashboardPage } from '../apps/admin/pages/AdminDashboardPage';
// Importamos la nueva página
import { AdminProfesoresPage } from '../apps/admin/pages/AdminProfesoresPage';

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
      // Añadimos la nueva ruta aquí
      {
        path: "profesores",
        element: <AdminProfesoresPage />,
      }
    ],
  },
]);