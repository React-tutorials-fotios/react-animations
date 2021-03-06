/* eslint-disable testing-library/no-debugging-utils */
import { cleanup, screen } from "@testing-library/react";
import React from "react";
import { fetchMovies } from "../utils";

export const movies = [
  {
    id: 1,
    title: "one",
    release_date: "2022",
    poster_path: "poster_path",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure exercitationem eum explicabo sequi minima et vero omnis quis doloremque pariatur laborum, autem cum illum neque deleniti distinctio reiciendis repellat error officia magni? Molestias saepe perspiciatis eos dignissimos consequuntur magni quam et veritatis. Dolore nemo, ad ullam voluptatibus ipsa pariatur et beatae esse provident tempore, dicta, amet repellendus ea architecto laudantium perferendis labore deserunt id minima quae impedit vero quos praesentium! Aliquam, eveniet ab voluptate voluptatum quasi perferendis illo amet, explicabo, reprehenderit dicta cumque impedit repellat nam aspernatur asperiores soluta doloremque",
  },
  {
    id: 2,
    title: "one",
    release_date: "2022",
    poster_path: "poster_path",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure exercitationem eum explicabo sequi minima et vero omnis quis doloremque pariatur laborum, autem cum illum neque deleniti distinctio reiciendis repellat error officia magni? Molestias saepe perspiciatis eos dignissimos consequuntur magni quam et veritatis. Dolore nemo, ad ullam voluptatibus ipsa pariatur et",
  },
  {
    id: 3,
    title: "one",
    release_date: "2022",
    poster_path: "poster_path",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure exercitationem eum explicabo sequi minima et",
  },
];

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

describe("fetchMovies()", () => {
  const e = { preventDefault: () => {} };
  const setMovies = () => movies;

  it("Should fetch the movies", async () => {
    // TODO: use mock service worker to avoid reall fetching
    // https://www.youtube.com/watch?v=v77fjkKQTH0&t=546s
    const results = await fetchMovies(e, "hello", setMovies);
    // screen.debug();
    expect(results.length).toBeTruthy();
  });
});
