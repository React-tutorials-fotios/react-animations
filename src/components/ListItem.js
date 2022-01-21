import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import MovieDetails from "./MovieDetails";
import "../CSS/listItem.css";

const boxShadow = "0 0 8px rgb(47, 82, 95) ";

// anim for hover
const itemVariants = {
  whileHover: {
    scale: 1.05,
    boxShadow: boxShadow,
    transition: {
      type: "spring",
      stiffness: 100,
      mass: 1,
    },
  },
};

// anim for hover
const imgVariants = {
  whileHover: {
    scale: 1.05,
    boxShadow: boxShadow,
    transition: {
      type: "spring",
      stiffness: 550,
      mass: 3,
      bounce: 0.25,
    },
  },
};

const ListItem = ({ index, movie }) => {
  const [url, setUrl] = useState("");
  const [checkMovie, setCheckMovie] = useState(false);
  const path = movie.poster_path;
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://image.tmdb.org/t/p/w92/${path}`);
      setUrl(response.url);
    })();
  }, [url, path]);

  const checkMovieHandler = () => {
    setCheckMovie((prev) => !prev);
  };

  return (
    <div>
      {checkMovie ? (
        <MovieDetails checkMovieHandler={checkMovieHandler} movie={movie} />
      ) : (
        <motion.li
          variants={itemVariants}
          whileHover="whileHover"
          onClick={checkMovieHandler}>
          <motion.img
            variants={imgVariants}
            whileHover="whileHover" // attribute should propagated from parent
            initial={{ opacity: 0 }} // transition semiworks if in variants
            animate={{ opacity: 1, transition: { delay: (index + 1) * 0.8 } }}
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
                  // delay: 17, // for 20 movies
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
      )}
    </div>
  );
};

export default ListItem;
