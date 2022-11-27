import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


const router=createBrowserRouter([
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"**",
  }
])

function App() {
  return (
    <div>
      <h1>Homepage</h1>
    <RouterProvider router={router}>fsad</RouterProvider>
    </div>

  );
}

export default App;
