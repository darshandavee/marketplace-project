export default function ProductCard(props) {
    return (
      <div className="product-card" onClick={props.onSelect}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <h4>{props.price}</h4>
        <p>{props.description}</p>
      </div>
    );
}
