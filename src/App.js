import "./App.css";
import logo from "./logo.png";
import { Route, Routes } from "react-router-dom";
import { SignUp, Login } from "./pages";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  );
}

export default App;
