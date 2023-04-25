import {
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import { Home, NotFound, Post } from "./pages";
import { DefaultLayout } from "./ui/layouts";

export const router = createBrowserRouter([
  {
    path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'post/:postId', element: <Post /> },
        { path: '404', element: <NotFound /> },
      ],
  },
  { path: '*', element: <Navigate to="/404" replace /> },
]);