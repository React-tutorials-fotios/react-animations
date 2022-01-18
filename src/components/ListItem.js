import React, { useEffect, useState } from "react";
import baseURL from "../constants/baseURL";
import "../CSS/listItem.css";

const ListItem = ({ movie }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://image.tmdb.org/t/p/w92/${movie.poster_path}`
        // `${baseURL}configuration?api_key=<<api_key>>`
      );
      setUrl(response.url);
      console.log(response.url);
    })();
  }, [url]);

  return (
    <li>
      <img src={url} alt="movie image" />
      <section className="movie-description">
        <h4>{movie.title}</h4>
        <h5>{movie.release_date}</h5>
        <p>{movie.overview.slice(0, 88)}...</p>
      </section>
    </li>
  );
};

export default ListItem;
