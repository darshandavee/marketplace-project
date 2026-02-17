import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductPage from "../components/Productpage";
import EraSelect from "../components/EraSelect";

import "./ProductCatalogue.css";
import { Link } from "react-router-dom";


export default function ProductCatalogue({ products }) {


  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [selectedEra, setSelectedEra] = useState("")

   useEffect(() => {
  setSelectedProduct(null);
  }
  ,[selectedEra])

    const allEras = [...new Set(products.map(product => product.era))];
   
    const filteredProducts = selectedEra 
    ? products.filter(product => product.era === selectedEra)
    : products;

  return (
    <div className="app">
    
      <h1>Featured Products</h1>

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
    <EraSelect //genreselect function
    eras={allEras} selected={selectedEra} onChange={setSelectedEra}>
    </EraSelect>
    </div>

  );
}
