import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";
import Login from "./pages/Login";
import Profile from './pages/Profile';
import Signup from "./pages/Signup";
import GroupMenu from "./pages/GroupMenu";


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/group" element={<Group />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groupmenu" element={<GroupMenu />} />


         
      </Routes>
      </BrowserRouter>
  
  );
}

export default App;
