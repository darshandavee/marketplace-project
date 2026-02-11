

export default function ProductCard({product, onClick}) {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.title}
        onClick={onClick} style={{ cursor: 'pointer'}}/>
        <h3 className="title">{product.title}</h3>
        <h4 className="price">{product.price}</h4>
        <p className="description">{product.description}</p>
        <button className="addToCart">+</button>
        <p className="starrating">☆☆☆</p>
       
      </div>
    );
}
