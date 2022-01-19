import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MovieDetails from "./MovieDetails";
import "../CSS/listItem.css";

const itemVariants = {
  whileHover: { scale: 1.05, boxShadow: "0 0 8px rgb(47, 82, 95) " },
};

const imgVariants = {
  whileHover: {
    scale: 1.1,
    boxShadow: "0 0 8px rgb(47, 82, 95) ",
    transition: { type: "spring", stiffness: 550 },
  },
};

const ListItem = ({ index, movie }) => {
  const [url, setUrl] = useState("");
  const [checkMovie, setCheckMovie] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://image.tmdb.org/t/p/w92/${movie.poster_path}`
      );
      setUrl(response.url);
    })();
  }, [url]);

  const checkMovieHandler = () => {
    setCheckMovie((prev) => !prev);
  };

  if (checkMovie) {
    return <MovieDetails checkMovieHandler={checkMovieHandler} movie={movie} />;
  } else
    return (
      <motion.li
        variants={itemVariants}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1, transition: { type: "spring", stiffness: 80 } }}
        whileHover="whileHover"
        onClick={checkMovieHandler}>
        <motion.img
          variants={imgVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: (index + 1) * 0.8 } }}
          whileHover="whileHover" // attribute should propagated from parent
          src={url}
          alt="movie image"
        />
        <section className="movie-description">
          <h4>{movie.title}</h4>

          <motion.h5
            initial={{ scale: 0.8 }}
            animate={{
              scale: 1,
              transition: {
                // delay: 17,
                delay: 2.4,
                type: "spring",
                stiffness: 550,
              },
            }}>
            {movie.release_date}
          </motion.h5>
          <p>{movie.overview.slice(0, 88)}...</p>
        </section>
      </motion.li>
    );
};

export default ListItem;
