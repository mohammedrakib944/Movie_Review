import React, { useEffect } from "react";
import MovieListing from "../movieListing/Movielisting";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  let movies = "Horror";
  let shows = "horror";

  useEffect(() => {
    dispatch(fetchAsyncMovies(movies));
    dispatch(fetchAsyncShows(shows));
  }, [dispatch]);

  return (
    <div className="home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
