import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import StartUp from "./components/startup/StartUp";
import { AuthContext } from "./context/AuthContext";
import PublicRoute from "../src/routes/PublicRoute";
import PrivateRoute from "../src/routes/PrivateRoute";

function App() {
  const { loading, user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Startup" element={<StartUp />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
