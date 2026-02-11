import React from "react";
import "./App.css";
import AppPp from "./components/app-pp";
import products from "./components/products"
import ProductCard from './components/ProductCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/Productpage";


const App = () => {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<AppPp products={products}/>} />
      <Route path="/product/:id" element={<ProductPage products={products} />} />
    </Routes>
   

      
    </>
  );
};

export default App;
