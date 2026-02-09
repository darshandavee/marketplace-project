// import "./App.css";
import { useState, useEffect, useRef } from "react";
import ProductCard from "./components/ProductCard";
// import MovieDetails from "./components/MovieDetails";
import "./app-pp.css";
const products = [
  {
    id: 1,
    title: "Alexander the Great's Sword",
    description:
      "Sword carried by Alexander the Great during his Thracian campaign around 330BCE",
    image: "AtG_Sword.jpg",
    // authenticity: True,
    price: 111000, 
  },
  {
    id: 2,
    title: "Magna Carta, reproduction",
    description:
      "The original Magna Carta, established in the year 1215 much to King John's dismay. ",
    image: "magna-carta.png",
    // authenticity: False,
    price: 2200,
  },
  {
    id: 3,
    title: "Temporal Stabiliser version 7.0",
    description: "A unique device from 2540 which can allow the adjustment of persons to specific time eras, combatting the time-sickness associated with Temporal Shifting. Authenticated by the DTS and favoured by Zaphod Beetlebrox",
    image: "Temporal Stabiliser.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 4,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 5,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 6,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 7,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 8,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 9,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 10,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 11,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 12,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 13,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 14,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 15,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
  {
     id: 16,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "watch.jpg",
    // authenticity: True,
    price: 9800,
  },
];


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

const handleClick = (product) => {
  setSelectedProduct(product);
  setShowDetails(true);
};




  return (
    <div className="app">
      <h1>Product Cards</h1>

      <div className="product-row" >
        {products.map((product) => (
          <ProductCard className = "productCard"
          key={product.id}
          product={product}
          image={product.image}
          title={product.title}
          price={product.price}
          button="+"
          // description={product.description}
          onClick={() => handleClick(product)}
        />
        ))}
    
        {selectedProduct ? (
          <div className="product-title">
            <h3>{selectedProduct.title}</h3>
            </div>)
             : (
              <p className="productPrompt">Please select this product!</p>
              
             )}

      </div>


    </div>


  );
}

//   const detailsRef = useRef(null);

//   useEffect(() => {
//     // if (!selectedProduct) return;
//     if (!detailsRef.current) return;

//     detailsRef.current.scrollIntoView({
//       behaviour: "smooth",
//       block: "start",
//     });
//   }, [selectedMovie]);
