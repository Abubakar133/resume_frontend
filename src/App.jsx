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
import Success from './Dashboard_components/success';
import Home from './pages/BlogIframe'
import {Forget} from './pages/forgetpassword'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Dashboard" element={<Dashboard1 />} />
      <Route path="/Dashboard2" element={<Dashboard2 />} />
      <Route path="/Success" element={<Success />} />
      <Route path="/forget" element={<Forget />} />


     
    </Routes>
  );
}
export default App;
