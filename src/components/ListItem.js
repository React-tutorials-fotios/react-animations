import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../CSS/listItem.css";
import MovieDetails from "./MovieDetails";

const itemVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 80 } },
  transition: { type: "spring", stiffness: 520 },
  whileHover: { scale: 1.05, boxShadow: "0 0 8px rgb(47, 82, 95) " },
};

const imgVariants = {
  whileHover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgb(47, 82, 95) ",
    transition: { type: "spring", stiffness: 550 },
  },
};

const ListItem = ({ movie }) => {
  const [url, setUrl] = useState("");
  const [checkMovie, setCheckMovie] = useState(false);
  const [animateItem, setAnimateItem] = useState(-700);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://image.tmdb.org/t/p/w92/${movie.poster_path}`
      );
      setUrl(response.url);
    })();
  }, [url]);

  useEffect(() => {
    setAnimateItem(0);
  }, []);

  const checkMovieHandler = () => {
    console.log("checkMovieHandler", movie.id, url);
    setCheckMovie(true);
  };

  if (checkMovie) {
    return <MovieDetails movie={movie} />;
  } else
    return (
      <motion.li
        variants={itemVariants}
        initial="initial"
        animate="animate"
        transition={itemVariants.transition} // no effect if in quotes
        whileHover="whileHover"
        onClick={checkMovieHandler}>
        <motion.img
          variants={imgVariants}
          whileHover="whileHover" // attribute should propagated from parent
          src={url}
          alt="movie image"
        />
        <section className="movie-description">
          <motion.h4 animate={{ fontSize: 28, color: "white", x: -10, y: 0 }}>
            {movie.title}
          </motion.h4>
          <h5>{movie.release_date}</h5>
          <p>{movie.overview.slice(0, 88)}...</p>
        </section>
      </motion.li>
    );
};

export default ListItem;
