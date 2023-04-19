import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import { DefaultLayout } from "./ui/layouts";


export const router = createBrowserRouter([
  {
    path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: '404', element: <NotFound /> },
      ],
  },
  { path: '*', element: <Navigate to="/404" replace /> },
]);