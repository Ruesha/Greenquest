import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomCursor from "./components/CustomCusor";
import Landing from "./pages/Landing";



const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
        
      </Routes>
    </Router>
  );
};

export default App;