import React, { useContext } from "react";
import { MoviesContext } from "../App";
import ListItem from "./ListItem";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);
  console.log("movies", movies);
  return (
    <div>
      <ul>
        {movies.length
          ? movies.map((movie) => <ListItem key={movie.id} movie={movie} />)
          : null}
      </ul>
    </div>
  );
};

export default MoviesList;
