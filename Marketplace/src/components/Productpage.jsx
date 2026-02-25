import { useParams } from "react-router-dom";
import { useState } from "react";
import { BackButton } from "./BackButton.jsx";
import "./ProductPage.css"

export default function ProductPage({ products }) {
  const { id } = useParams();
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = async () => {
    try {
      const response = await fetch("https://timeazon.cta-training.academy/api/addtocart?email=will@example.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          userId: "USER_ID_HERE" // replace with auth/user session ID
        })
      });

      const result = await response.json();
      if (response.ok) {
        setAdded(true);
        console.log("Added to cart:", result);
      } else {
        console.error("Error adding to cart:", result);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className="productPageElements">
      <BackButton className="productPageBackButton"/>
      <div className="pageImage">
        <img src={product.image} className="productPageImage"/>
      </div>
      <div className="productDetails">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <button
          className="addToCartButton"
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
