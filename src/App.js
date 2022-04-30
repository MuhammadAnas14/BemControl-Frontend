import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import LedControl from './Components/LedControl'
import Verification from './Components/verification'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/detection" element={<LedControl />} />
          <Route path="/verify" element={<Verification />} />
        </Routes>
    </Router>
  );
}

export default App;
