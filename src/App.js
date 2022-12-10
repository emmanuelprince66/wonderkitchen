import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Carts from "./Components/Carts/Carts";
import Description from "./Components/Description/Description";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Carts cart={cart} setCart={setCart} />} />
        <Route path="/description/:id" element={<Description cart={cart} setCart={setCart}  />} />
      </Routes>
    </div>
  );
}

export default App;
