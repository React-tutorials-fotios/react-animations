import React from "react";

import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";
import { MoviesProvider } from "./utils/MoviesProvider";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <MoviesProvider>
        <SearchBar />
        <MoviesList />
      </MoviesProvider>
    </div>
  );
}

export default App;
