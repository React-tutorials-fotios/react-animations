import React, { createContext, useState } from "react";

import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";
import "./CSS/App.css";

export const MoviesContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <MoviesContext.Provider value={{ movies, setMovies }}>
        <SearchBar />
        <MoviesList />
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
