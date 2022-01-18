import React from "react";
import ListItem from "./ListItem";

const movies = [
  { id: 1, title: "movie one", releaseDate: "15/05/2000" },
  { id: 2, title: "movie two", releaseDate: "16/08/2020" },
  { id: 3, title: "movie three", releaseDate: "17/09/2018" },
];

const MoviesList = () => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
