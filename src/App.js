import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import pageNotfound from "./components/pageNotfound/Pagenotfound";
import Footer from "./components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";

// testing
import { userAuth } from "./features/authSlice";

function App() {
  const dispatch = useDispatch();

  const access = localStorage.getItem("access");
  if (access) {
    dispatch(userAuth(true));
  } else {
    alert("Vai data nai!");
    dispatch(userAuth(false));
  }

  return (
    <div className="App">
      {/* <Header />
      <Home />
      <MovieDetails />
      <pageNotfound />
      <Footer /> */}
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetails} />
          <Route component={pageNotfound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
