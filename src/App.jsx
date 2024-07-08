import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
