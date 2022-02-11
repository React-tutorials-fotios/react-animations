/* eslint-disable testing-library/no-debugging-utils */
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import MoviesList from "../components/MoviesList";
import { MoviesProvider } from "../utils/MoviesProvider";
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

describe("<MoviesList />", () => {
  it("Component should render movies list", async () => {
    render(
      <MoviesProvider value={{ movies }}>
        <MoviesList />
      </MoviesProvider>
    );

    // screen.debug();

    const ul = await screen.findByRole("list");
    expect(ul).toBeInTheDocument();
  });
});
