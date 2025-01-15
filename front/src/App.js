import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Panier from "./components/Panier";

const App = () => {
  const [cart, setCart] = useState([])
  console.log("cart",cart)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home cart={cart} setCart={setCart} />} />
        <Route
          path="/panier"
          element={<Panier cart={cart} setCart={setCart} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
