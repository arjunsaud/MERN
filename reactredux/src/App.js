import {RouterProvider} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import {router} from "./Routes"
function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
