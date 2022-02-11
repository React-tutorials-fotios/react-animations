import React from "react";
import { motion } from "framer-motion";

import ListItem from "./ListItem";
import { useMoviesContext } from "../utils/MoviesProvider";
import "../CSS/movieList.css";

// anim to bring it in
const itemVariants = {
  initial: { x: "-100vw", opacity: 0, scale: 0 },
  animate: { x: 0, opacity: 1, scale: 1 },
};

const MoviesList = () => {
  const { movies } = useMoviesContext();

  return (
    <ul>
      {movies.length
        ? movies.slice(0, 3).map((movie, i) => (
            <motion.div
              key={movie.id}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: i * 0.8 }}>
              <ListItem key={movie.id} movie={movie} index={i} />
            </motion.div>
          ))
        : null}
    </ul>
  );
};

export default MoviesList;
