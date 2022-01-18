import React, { createContext, useState } from "react";

import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";
import "./App.css";

export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      <SearchBar />
      <MoviesList />
    </MoviesContext.Provider>
  );
}

export default App;
