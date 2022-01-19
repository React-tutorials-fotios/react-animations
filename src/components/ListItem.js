import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../CSS/listItem.css";
import MovieDetails from "./MovieDetails";

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
    setCheckMovie(true);
  };

  if (checkMovie) {
    return <MovieDetails movie={movie} />;
  } else
    return (
      <motion.li
        variants={itemVariants}
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

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{
              scale: 1.1,
              transition: {
                delay: 17,
                type: "spring",
                stiffness: 550,
              },
            }}>
            {movie.release_date}
          </motion.div>
          <p>{movie.overview.slice(0, 88)}...</p>
        </section>
      </motion.li>
    );
};

export default ListItem;
