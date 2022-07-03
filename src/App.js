import "./App.css";
import logo from "./logo.png";
import { Route, Routes } from "react-router-dom";
import { SignUp, Login } from "./pages";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
