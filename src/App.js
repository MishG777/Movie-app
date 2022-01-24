import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./stypes.css";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

export default function App() {
  const hello = (e) => {
    console.log(e);
  };
  hello();

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(FEATURED_API).then((res) => {
      setMovies(res.data.results);
      // console.log(movies);
    });
  }, []);

  const getMovies = () => {
    axios.get(SEARCH_API + searchTerm).then((res) => {
      setMovies(res.data.results);
      console.log(movies);
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies();
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            placeholder="Search..."
            className="search"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.map((each) => (
          <Movie {...each} key={each.id} />
        ))}
      </div>
    </>
  );
}

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1
//"https://image.tmdb.org/t/p/w1280"
//
