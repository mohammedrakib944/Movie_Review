import React from "react";
import "./moviecard.css";
import { Link } from "react-router-dom";

export default function Moviecard(props) {
  const { data } = props;
  return (
    <div>
      <Link to={`/movie/${data.imdbID}`}>
        <div className="custom-design">
          <img src={data.Poster} className="card-img-top" alt={data.Title} />
          <div className="card-header custom-card-header">{data.Title}</div>
          <div className="card-footer">
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
