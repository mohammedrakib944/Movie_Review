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

  console.log("Data: ", data);

  window.onload = function () {
    window.location.href = "/";
  };

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className="container loading">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="container details">
          <img src={data?.Poster} alt={data.Title} />
          <hr />
          <h2>{data?.Title}</h2>
          <p>{data?.Released}</p>
          <table>
            <tbody className="TableBody">
              <tr>
                <th>imdb Rating: </th>
                <td>{data?.imdbRating}</td>
              </tr>
              <tr>
                <th>imdb Votes: </th>
                <td>{data?.imdbVotes}</td>
              </tr>
              <tr>
                <th>Actors: </th>
                <td>{data?.Actors}</td>
              </tr>
              <tr>
                <th>Awards: </th>
                <td>{data?.Awards}</td>
              </tr>
              <tr>
                <th>Box Office: </th>
                <td>{data?.BoxOffice}</td>
              </tr>
              <tr>
                <th>Country: </th>
                <td>{data?.Country}</td>
              </tr>
              <tr>
                <th>DVD: </th>
                <td>{data?.DVD}</td>
              </tr>
              <tr>
                <th>Director: </th>
                <td>{data?.Director}</td>
              </tr>
              <tr>
                <th>Language: </th>
                <td>{data?.Language}</td>
              </tr>
              <tr>
                <th>Plot: </th>
                <td style={{ padding: "10px 0" }}>{data?.Plot}</td>
              </tr>
              <tr>
                <th>Language: </th>
                <td>{data?.Language}</td>
              </tr>
              <tr>
                <th>Runtime: </th>
                <td>{data?.Runtime}</td>
              </tr>
              <tr>
                <th>Writer: </th>
                <td>{data?.Writer}</td>
              </tr>
              <tr>
                <th>Year: </th>
                <td>{data?.Year}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
