import React, { useState } from "react";
import { motion } from "framer-motion";

import api_key from "../api_key";
import "../CSS/searchBar.css";
import { useMoviesContext } from "../utils/MoviesProvider";

const baseURL = "https://api.themoviedb.org/3/";

const SearchBar = () => {
  const { setMovies } = useMoviesContext();

  const [movieName, setMovieName] = useState("");

  const searchMovieHandler = async (e) => {
    e.preventDefault();

    if (movieName.trim() === "") {
      alert("No keyword. Please add the name of a movie! ");
      return;
    }

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
      <motion.button
        className="searchButton"
        onClick={searchMovieHandler}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        Search
      </motion.button>
    </form>
  );
};

export default SearchBar;
