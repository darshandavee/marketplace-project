import { useEffect, useState } from "react";
import"./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Replace with your API Gateway GET cart URL
  const GET_CART_URL = "https://timeazon.cta-training.academy/api/addtocart?email=will@example.com";

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(GET_CART_URL);
        const data = await response.json();

        // Assuming your Lambda returns { products: [1, 2, 3] }
        setCartItems(data.products || []);
      } catch (err) {
        console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  if (loading) return <p>Loading cart...</p>;
  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((id) => (
          <li key={id}>Product ID: {id}</li>
        ))}
      </ul>
    </div>
  );
}
