import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/movieDetails/MovieDetails";
import pageNotfound from "./components/pageNotfound/Pagenotfound";
import Footer from "./components/footer/Footer";

function App() {
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
