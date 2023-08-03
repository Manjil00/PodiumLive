import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";
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
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/group" element={<Group />} />
        <Route path="/profile" element={<Profile />} />

         
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
