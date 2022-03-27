import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Header() {
  const [searchText, setsearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Type movies or shows name !");
      return;
    }
    dispatch(fetchAsyncMovies(searchText));
    dispatch(fetchAsyncShows(searchText));
    setsearchText("");
  };

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link to="/">
                <div className="logo">Movie.R</div>
              </Link>
            </div>
            <div className="col-8">
              <form onSubmit={handleSearch} className="searchStyle">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                  placeholder="Search Movies or TV shows"
                />
                <button type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
