import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../CSS/movieDetails.css";

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

const imgVariants = {
  whileHover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgb(47, 82, 95) ",
    transition: { type: "spring", stiffness: 550 },
  },
};

const MovieDetails = ({ movie }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
        // `${baseURL}configuration?api_key=<<api_key>>`
      );
      setUrl(response.url);
    })();
  }, [url]);
  console.log(movie.overview.length);

  const getHeight = () => {
    const len = movie.overview.length;
    if (len < 100) return len + 740;
    if (len > 100 && len < 200) return len + 710;
    if (len > 200 && len < 200) return len + 700;
    if (len > 200 && len < 300) return len + 650;
    if (len > 300 && len < 400) return len + 600;
    if (len > 400 && len < 500) return len + 520;
    if (len > 600 && len < 700) return len + 520;
    if (len > 700 && len < 800) return len + 350;
    if (len > 800) return len + 350;
  };
  return (
    <motion.article
      variants={itemVariants}
      initial="initial"
      animate="animate"
      transition={itemVariants.transition}
      className="container"
      style={{ height: `${getHeight()}px` }}>
      <motion.img
        variants={imgVariants}
        whileHover="whileHover"
        src={url}
        alt="movie image"
      />
      <section className="movie-description">
        <h4>{movie.title}</h4>
        <p>Release date: {movie.release_date}</p>
        <p className="details">Populatity: {movie.popularity}</p>
        <p className="details">Vote Average: {movie.vote_average}</p>
        <p className="details">Vote count: {movie.vote_count}</p>
        <p className="overview">{movie.overview}</p>
      </section>
    </motion.article>
  );
};

export default MovieDetails;
