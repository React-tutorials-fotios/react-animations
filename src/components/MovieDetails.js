import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../CSS/movieDetails.css";
import { getHeight } from "../utils";

const itemVariants = {
  initial: { opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1.05,
    boxShadow: "0 0 8px rgb(47, 82, 95) ",
    transition: { type: "spring", stiffness: 80 },
  },
  transition: { type: "spring", stiffness: 520 },
};

const MovieDetails = ({ checkMovieHandler, movie }) => {
  const [url, setUrl] = useState("");
  const path = movie.poster_path;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://image.tmdb.org/t/p/w185/${path}`);
        setUrl(response.url);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [url, path]);

  return (
    <motion.article
      onClick={checkMovieHandler}
      variants={itemVariants}
      initial="initial"
      animate="animate"
      transition={itemVariants.transition}
      className="container"
      style={{ height: `${getHeight(movie.overview.length)}px` }}>
      <img src={url} alt="movie poster" />

      <section className="movie-description">
        <h4>{movie.title}</h4>
        <p>Release date: {movie.release_date}</p>
        <p className="details">Populatity: {movie.popularity}</p>
        <p className="details">Vote Average: {movie.vote_average}</p>
        <p className="details">Vote count: {movie.vote_count}</p>
        <p>{movie.overview}</p>
      </section>
    </motion.article>
  );
};

export default MovieDetails;
