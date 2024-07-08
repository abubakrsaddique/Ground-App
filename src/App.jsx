import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import StartUp from "./components/startup/StartUp";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/startup" element={<StartUp />} />
      </Routes>
    </Router>
  );
}

export default App;
