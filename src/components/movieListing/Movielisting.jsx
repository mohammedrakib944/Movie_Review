import React from "react";
import "./movielisting.css";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/Moviecard";
import Slider from "react-slick";
import { Settings } from "../apis/Settings";

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

  const shows = useSelector(getAllShows);
  let renderShows = "";
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  return (
    <div>
      <div className="container">
        <div className="custom-row">
          <div className="movie-list">
            <h2 className="mt-2 movies-title">Movies</h2>
            <Slider {...Settings}>{renderMovies}</Slider>
          </div>
        </div>
        {/* shows */}
        <div className="custom-row">
          <div className="movie-list">
            <h2 className="mt-2 movies-title">Shows</h2>
            <Slider {...Settings}>{renderShows}</Slider>
            {/* <div className="movie-container">{renderShows}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
