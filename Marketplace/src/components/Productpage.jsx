import { useParams } from "react-router-dom";

export default function ProductPage({ products }) {
  console.log(products);
  const { id } = useParams();

  const product = products.find(
    p => p.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={product.image}/>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>{product.price}</h3>
    </div>
  );
}

