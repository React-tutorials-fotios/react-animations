import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "../CSS/searchBar.css";
import { useMoviesContext } from "../utils/MoviesProvider";
import fetchMovies from "../utils/fetchMovies";
import Modal from "./Modal";
import MAnimation from "./MAnimation";

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
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          height: "15vh",
          marginBottom: -33,
        }}>
        {!showModal ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
              style={{ marginBottom: -10 }}
              id="letter-m"></motion.div>
            <MAnimation />
            <motion.input
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              type="text"
              id="header-search"
              placeholder="Movie title"
              name="movieName"
              value={movieName}
              onChange={handleChange}
            />
          </>
        ) : null}

        <AnimatePresence>
          {animate ? (
            <motion.button
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={
                !movies.length
                  ? { type: "spring", stiffness: 200 }
                  : { type: "just" }
              }
              exit={{ x: "-100vh" }}
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
