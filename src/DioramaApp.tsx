import { RouterProvider } from 'react-router-dom';
import { appRouter } from './routes/app.routes';

export function DioramaApp() {
  return (
    <RouterProvider router={appRouter} />
  );
}