import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Modal from "./components/Modal";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
      <Sidebar />
    </Router>
  );
};

export default App;
