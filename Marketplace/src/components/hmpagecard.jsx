export default function MovieCard(props) {
    return (
      <div className="movie-card" onClick={props.onSelect}>
        <img src={props.image} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    );
}
