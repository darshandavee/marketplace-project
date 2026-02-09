import React from "react";
import "./App.css";
import MovieCard from "./components/hmpagecard";
import Navbar from "./components/Navbar";

const movies = [
  {
    id: 1,
    title: "PAST",
    description: "PAST",
    image: "",
  },
  {
    id: 2,
    title: "PRESENT",
    description: "PRESENT",
    image: "",
  },
  {
    id: 3,
    title: "FUTURE",
    description: "FUTURE",
    image: "",
  },
];

const App = () => {
  return (
    <>
      <Navbar />

      <div className="app">
        <div className="movie-row">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
