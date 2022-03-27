import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  fetchDetails,
  getDetails,
  removeDetails,
} from "../../features/movies/movieSlice";
import "./moviedetails.css";

export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetails);

  useEffect(() => {
    dispatch(fetchDetails(imdbID));
    return dispatch(removeDetails());
  }, [dispatch, imdbID]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="container loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="container details">
          <img src={data.Poster} alt={data.Title} />
          <h2>{data.Title}</h2> <br />
          <p>{data.Plot}</p> <br />
          <p>{data.Actors}</p> <br />
          <p>{data.Country}</p> <br />
          <p>Year: {data.Year}</p> <br />
          <p>Imdb Rating: {data.imdbRating}</p> <br />
          <p>imdbVotes: {data.imdbVotes}</p> <br />
        </div>
      )}
    </>
  );
}
