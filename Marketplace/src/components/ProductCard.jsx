

export default function ProductCard({product, onClick}) {
    return (
      <div className="product-card">
        <div className="imageHolder">
        <img src={product.image} alt={product.title}
        onClick={onClick} style={{ cursor: 'pointer'}}/></div>
        <h3 className="title">{product.title}</h3>
        <h4 className="price">ⓣ{product.price}</h4>
        <p className="description">{product.description}</p>
        <button className="addToCart">+</button>
        <p className="addCartPrompt">Add to Cart</p>
        <p className="starrating">★★★☆☆</p>
       
      </div>
    );
}
