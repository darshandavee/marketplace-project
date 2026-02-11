import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductPage from "../components/Productpage";

import "./ProductCatalogue.css";
import { Link } from "react-router-dom";


export default function AppPp({ products }) {

  return (
    <div className="app">
    
      <h1>Product Cards</h1>

      <div className="product-row" >
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
             <ProductCard className = "productCard"
          key={product.id}
          product={product}
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
        />
          </Link>
))}

    </div>
    </div>

  );
}
