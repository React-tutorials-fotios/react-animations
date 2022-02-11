/* eslint-disable testing-library/no-debugging-utils */
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";

import { MoviesProvider } from "../utils/MoviesProvider";
import MovieDetails from "../components/MovieDetails";
import { movies } from "./fetchMovies.test";

jest.mock("../utils/MoviesProvider", () => {
  const React2 = require("react");

  const FakeMoviesContext = React2.createContext();
  const useFakeMoviesContext = () => React2.useContext(FakeMoviesContext);

  const FakeMoviesProvider = ({ children, value = {} }) => {
    return (
      <FakeMoviesContext.Provider value={value}>
        {children}
      </FakeMoviesContext.Provider>
    );
  };

  return {
    useMoviesContext: useFakeMoviesContext,
    MoviesProvider: FakeMoviesProvider,
  };
});

afterEach(() => cleanup());

describe("<MovieDetails />", () => {
  const movie = movies[0];

  it("MovieDetails is rendered", async () => {
    render(
      <MoviesProvider value={{}}>
        <MovieDetails movie={movie} />
      </MoviesProvider>
    );

    // screen.debug();

    const article = await screen.findByRole("article");
    expect(article).toBeInTheDocument();
  });
});
