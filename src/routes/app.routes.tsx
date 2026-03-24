import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AdminLayout } from '../apps/admin/components/AdminLayout';
import { AdminDashboardPage } from '../apps/admin/pages/AdminDashboardPage';
import { AdminProfesoresPage } from '../apps/admin/pages/AdminProfesoresPage';
import { AdminAlumnosPage } from '../apps/admin/pages/AdminAlumnosPage';
import { AdminEstructuraPage } from '../apps/admin/pages/AdminEstructuraPage';
// 1. Importas la página de cursos
import { AdminCursosPage } from '../apps/admin/pages/AdminCursosPage';

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
      {
        path: "profesores",
        element: <AdminProfesoresPage />,
      },
      {
        path: "alumnos",
        element: <AdminAlumnosPage />,
      },
      {
        path: "cursos",
        element: <AdminCursosPage />,
      },
      {
        path: "estructura",
        element: <AdminEstructuraPage />,
      }
    ],
  },
]);