import React from "react";
import { createBrowserRouter,Navigate } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import LoginWrapper from "./components/LoginWrapper";
import Todo from "./pages/Todo"

export const router = createBrowserRouter([
      {
        path: "/register",
        element: <Register />,
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
            element: <Navigate to="/todo" />,
          },
          {
            path: "/todo",
            element: <Todo />,
          }
        ],
      },
    ]
);
