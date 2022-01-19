import React, { createContext, useContext, useState } from "react";

export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(MoviesContext);

export default MoviesProvider;
