import Home from "./pages/home";
import Login from "./pages/login";
import { GlobalStyle } from "./globalStyles.style";
import { Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
