import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/login";
import LedControl from './Components/LedControl'


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/detection" element={<LedControl />} />
        </Routes>
    </Router>
  );
}

export default App;
