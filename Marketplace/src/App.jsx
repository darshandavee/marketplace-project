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
import ContactUs from "./components/ContactUs";


const App = () => {
  return (
    <Routes>
    {/* Layout route */}
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="product" element={<ProductCatalogue products={products} />} />
      <Route path="product/:id" element={<ProductPage products={products} />} />
      {/* /:id is for each of the product ids - for the individual pages*/}
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="*" element={<Error />} />
      
    </Route>
  </Routes>
  );
};

export default App;
