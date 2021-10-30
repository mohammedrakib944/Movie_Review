import React from "react";
import "./movielisting.css";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/Moviecard";

export default function Movielisting() {
  const movies = useSelector(getAllMovies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="container">
        <div className="custom-row">
          <div className="movie-list">
            <h2 className="mt-2 movies-title">Movies</h2>

            <div className="movie-container">{renderMovies}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
