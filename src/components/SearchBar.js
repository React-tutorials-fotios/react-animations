import React, { useContext, useState } from "react";

import api_key from "../api_key";
import { MoviesContext } from "../App";

import "../CSS/searchBar.css";

const SearchBar = () => {
  const { movies, setMovies } = useContext(MoviesContext);

  const [movieName, setMovieName] = useState("");

  const searchMovieHandler = async (e) => {
    e.preventDefault();
    let baseURL = "https://api.themoviedb.org/3/";
    try {
      const response = await fetch(
        `${baseURL}search/movie?api_key=${api_key}&query=${movieName}&language=en-US&include_adult=false`
      );

      const data = await response.json();

      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => setMovieName(e.target.value);

  return (
    <form>
      <input
        type="text"
        id="header-search"
        placeholder="Search movies"
        name="movieName"
        value={movieName}
        onChange={handleChange}
      />
      <button onClick={searchMovieHandler}>Search</button>
    </form>
  );
};

export default SearchBar;
