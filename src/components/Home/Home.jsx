import React, { useEffect } from "react";
import MovieListing from "../movieListing/Movielisting";

import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {};
    fetchMovies();
  }, []);
  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
