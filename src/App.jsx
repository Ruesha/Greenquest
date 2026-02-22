import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomCursor from "./components/CustomCusor";
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
};

export default App;