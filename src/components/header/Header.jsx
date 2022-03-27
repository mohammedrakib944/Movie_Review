import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

// testing for user auth
import { userAuth } from "../../features/authSlice";

export default function Header() {
  const [searchText, setsearchText] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Type movies or shows name!");
      return;
    }
    dispatch(fetchAsyncMovies(searchText));
    dispatch(fetchAsyncShows(searchText));
    setsearchText("");
  };

  // tesing
  const [testData, setTestData] = useState("");
  const { isAuth } = useSelector((state) => state.auth);

  const saveData = () => {
    if (testData === "") {
      alert("Please insert some text");
      return;
    }

    const myObj = {
      token: testData,
    };
    localStorage.setItem("access", JSON.stringify(myObj));
    dispatch(userAuth(true));
  };

  useEffect(() => {
    console.log("It's call again!");
  }, [saveData]);

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Link to="/">
                <div className="logo">MovieA</div>
                {!isAuth ? (
                  <div>
                    <input
                      type="text"
                      onChange={(e) => {
                        setTestData(e.target.value);
                      }}
                    />
                    <button onClick={saveData}>Save</button>
                  </div>
                ) : (
                  ""
                )}
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
