import "./App.css";
import logo from "./logo.png";
import { Route, Routes } from "react-router-dom";
import { SignUp, Login } from "./pages";
import Home from "./pages/home/home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
