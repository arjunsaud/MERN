import { RouterProvider } from "react-router-dom";
import {router} from './Routes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log("rendered");
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
