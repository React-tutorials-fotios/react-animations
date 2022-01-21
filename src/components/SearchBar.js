import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../CSS/searchBar.css";
import { useMoviesContext } from "../utils/MoviesProvider";
import fetchMovies from "../utils/fetchMovies";
import Modal from "./Modal";

const SearchBar = () => {
  const { movies, setMovies } = useMoviesContext();
  const [movieName, setMovieName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const animate = movieName.trim().length;

  const fetchMoviesHandler = async (e) => {
    await fetchMovies(e, movieName, setMovies);
    setMovieName("");
  };

  const handleChange = (e) => setMovieName(e.target.value);

  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <form>
        {!showModal ? (
          <motion.input
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            type="text"
            id="header-search"
            placeholder="Search movies"
            name="movieName"
            value={movieName}
            onChange={handleChange}
          />
        ) : null}
        <AnimatePresence>
          {animate ? (
            <motion.button
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={
                !movies.length
                  ? { type: "spring", stiffness: 200 }
                  : { type: "just" }
              }
              exit={{ y: "-100vh" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 8px rgb(47, 82, 95) ",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={fetchMoviesHandler}
              className="searchButton">
              Search
            </motion.button>
          ) : null}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default SearchBar;
