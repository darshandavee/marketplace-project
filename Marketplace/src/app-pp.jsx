import "./App.css";
import { useState, useEffect, useRef } from "react";
import ProductCard from "./components/ProductCard";
// import MovieDetails from "./components/MovieDetails";

const products = [
  {
    id: 1,
    title: "Alexander the Great's Sword",
    description:
      "Sword carried by Alexander the Great during his Thracian campaign around 330BCE",
    image: "/public/AtG_Sword.jpg/",
    authenticity: True,
    price: 111000, 
  },
  {
    title: "Magna Carta",
    description:
      "The original Magna Carta, established in the year 1215 much to King John's dismay.",
    image: "/public/magna-carta.png",
    authenticity: False,
    price: 2200,
  },
  {
    id: 3,
    title: "Temporal Stabiliser",
    description: "A unique device from 2540 which can allow the adjustment of persons to specific time eras, combatting the time-sickness associated with Temporal Shifting. Authenticated by the DTS and favoured by Zaphod Beetlebrox",
    image: "/movies/movie3.jpg",
    authenticity: True,
    price: 9800,
  },
  {
     id: 4,
    title: "Holographic timeflux3000 Watch",
    description:
      "Model flux3000. Includes display of time from any era and location. OK condition. Box not included",
    image: "/public/watch.jpg",
    authenticity: True,
    price: 9800,
  },
];


export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
//   const detailsRef = useRef(null);

//   useEffect(() => {
//     // if (!selectedProduct) return;
//     if (!detailsRef.current) return;

//     detailsRef.current.scrollIntoView({
//       behaviour: "smooth",
//       block: "start",
//     });
//   }, [selectedMovie]);

  return (
    <div className="app">
      <h1>Product Cards</h1>

      <div className="product-row">
        {products.map((product) => (
          <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          onSelect={() => setSelectedProduct(product)}
        />
        ))}

        {/* {selectedProduct && 
        <div ref={detailsRef}> 
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>
        </div>} */}

      </div>
    </div>
  );
}
