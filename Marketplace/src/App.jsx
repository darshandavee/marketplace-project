import React from "react";
import "./App.css";
import AppPp from "./pages/app-pp";
import products from "./components/products"
import ProductCard from './components/ProductCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/Productpage";
import Layout from "./Layout/Layout";
import Homepage from "./components/Homepage";
import Error from "./components/Error"


const App = () => {
  return (
    <Routes>
    {/* Layout route */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="product" element={<AppPp products={products} />} />
      <Route path="product/:id" element={<ProductPage products={products} />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
  );
};

export default App;
