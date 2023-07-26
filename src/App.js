import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Signup from "./pages/Signup";


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />


        
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;