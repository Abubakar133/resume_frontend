import { useEffect } from "react";
import {
  Routes,
  Route,

} from "react-router-dom";
import Desktop from "./pages/Desktop";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import Dashboard1 from './pages/Dashboard';
import Dashboard2 from './pages/Dashboard2';


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Desktop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard1 />} />
      <Route path="/Dashboard2" element={<Dashboard2 />} />
     
    </Routes>
  );
}
export default App;
