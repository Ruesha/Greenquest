import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CustomCursor from "./components/CustomCusor";
import Landing from "./pages/Landing";
import Shop from "./pages/Shop";
import Checkout from "./components/Checkout";
import PaymentSuccess from "./components/Paymentsuccess";


const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      
      </Routes>
    </Router>
  );
};

export default App;