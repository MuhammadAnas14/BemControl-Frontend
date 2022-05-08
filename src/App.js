import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import LedControl from './Components/LedControl'
import Verification from './Components/verification'
import SignUp from './Components/SignUp'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Dashboard" element={<LedControl />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
