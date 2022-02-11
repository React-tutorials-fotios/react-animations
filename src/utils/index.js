import * as utils from "./MoviesProvider";

const MoviesProvider = utils.MoviesProvider;
const useMoviesContext = utils.useMoviesContext;

export { MoviesProvider };
export { useMoviesContext };

export { default as fetchMovies } from "./fetchMovies";
