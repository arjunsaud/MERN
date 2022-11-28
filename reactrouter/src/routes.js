import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Todo from './pages/todo/Todo'
import LoginWrapper from "./components/loginWrapper/LoginWrapper";

export const router = createBrowserRouter([
    {
        path :"/login",
        element: <Login/>
    },
  {
    path: "/",
    element:<LoginWrapper/>,
    children: [
        {
            path: '/',
            element : <Navigate to='/home'/>
        },
        {
            path: '/home',
            element: <Home />,
        },

        {
            path : '/todo',
            element: <Todo />
          },
           {
            path : '/contact',
            element: <Contact />,
            
          },
    ]
   
  },
  
  
]);