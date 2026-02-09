export default function MovieDetails(props) {
    return (
      <section className="movie-details">
        <button className="movie-details__close" onClick={props.onClose}>
        Close
      </button>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.description}</p>
      </section>
    );
}
