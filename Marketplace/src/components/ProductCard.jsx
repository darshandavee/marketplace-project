export default function ProductCard({ product, onClick }) {
  return (
    <div className="product-card">
      <div className="card-frame">
        <div className="image-wrapper" onClick={onClick}>
          <img src={product.image} alt={product.title} />
          <button className="addToCart">+</button>
          <p className="addPrompt">Add To Cart</p>
          
          <div className="overlay" />

          <div className="card-info">
            <h3 className="title">{product.title}</h3>
            <h4 className="price">ⓣ{product.price}</h4>
            <p className="starrating">★★★☆☆</p>
          </div>

          
        </div>
      </div>
    </div>
  );
}
