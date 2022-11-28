import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import LoginWrapper from "./components/LoginWrapper";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard";
import AuthContextProvider from "./components/context/AuthContext";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthContextProvider />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <LoginWrapper />,
        children: [
          {
            path: "/",
            element: <Navigate to="/dashboard" />,
          },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },  
          {
            path: "/about",
            element: <About />,
          },
        ],
      },
    ],
  },
]);
