import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Main Dashboard */}
          <Route path="/" element={<HomePage />} />

          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
