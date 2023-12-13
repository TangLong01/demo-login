import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginNotWithAuth } from "./components/auth/Login";
import { HomeWithAuth } from "./components/home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithAuth />} />
        <Route path="/login" element={<LoginNotWithAuth />} />
      </Routes>
    </Router>
  );
};

export default App;
