import "./css/App.css";
import "./css/home.css";
import "./css/login.css";
import Home from "./components/home";
import Login from "./components/login";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
