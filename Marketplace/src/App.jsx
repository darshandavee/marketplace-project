import React from "react";
import "./App.css";
import ProductCatalogue from "./pages/ProductCatalogue";
import products from "./components/Products"
import ProductCard from './components/ProductCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./components/Productpage";
import Layout from "./Layout/Layout";
import Homepage from "./components/Homepage";
import Error from "./components/Error"
import Login from "./components/Login";
import Signup from "./components/Signup";


const App = () => {
  return (
    <Routes>
    {/* Layout route */}
    <Route path="/" element={<Layout />}>
     <Route index element={<Homepage />} />
     <Route path="login" element={<Login />} />
     <Route path="signup" element={<Signup />} />      
      <Route path="product" element={<ProductCatalogue products={products} />} />
      <Route path="product/:id" element={<ProductPage products={products} />} />
      <Route path="*" element={<Error />} />
    </Route>
  </Routes>
  );
};

export default App;
