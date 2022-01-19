import React, { useContext } from "react";
import { motion } from "framer-motion";

import { MoviesContext } from "../App";
import ListItem from "./ListItem";
import "../CSS/movieList.css";
const itemVariants = {
  initial: { x: "-100vw", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  whileHover: { scale: 1.05, boxShadow: "0 0 8px rgb(47, 82, 95) " },
};

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);
  console.log("movies", movies);
  return (
    <ul>
      {movies.length
        ? movies.map((movie, i) => (
            <motion.div
              variants={itemVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.4, delay: i * 0.3 }}>
              <ListItem key={movie.id} movie={movie} index={i} />
            </motion.div>
          ))
        : null}
    </ul>
  );
};

export default MoviesList;
