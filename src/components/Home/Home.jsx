import React, { useEffect } from "react";
import MovieListing from "../movieListing/Movielisting";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  let movies = "Horror";
  let shows = "horror";
  console.log("From Home: ", isAuth);

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
