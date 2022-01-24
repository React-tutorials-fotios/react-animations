import { cleanup, findAllByRole, render, screen } from "@testing-library/react";
import React from "react";
import MoviesList from "../components/MoviesList";
import { MoviesProvider } from "../utils/MoviesProvider";

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
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure exercitationem eum explicabo sequi minima et vero omnis quis doloremque pariatur laborum, autem cum illum neque deleniti distinctio reiciendis repellat error officia magni? Molestias saepe perspiciatis eos dignissimos consequuntur magni quam et veritatis. Dolore nemo, ad ullam voluptatibus ipsa pariatur et beatae esse provident tempore, dicta, amet repellendus ea architecto laudantium perferendis labore deserunt id minima quae impedit vero quos praesentium! Aliquam, eveniet ab voluptate voluptatum quasi perferendis illo amet, explicabo, reprehenderit dicta cumque impedit repellat nam aspernatur asperiores soluta doloremque",
  },
  {
    id: 3,
    title: "one",
    release_date: "2022",
    poster_path: "poster_path",
    overview:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure exercitationem eum explicabo sequi minima et vero omnis quis doloremque pariatur laborum, autem cum illum neque deleniti distinctio reiciendis repellat error officia magni? Molestias saepe perspiciatis eos dignissimos consequuntur magni quam et veritatis. Dolore nemo, ad ullam voluptatibus ipsa pariatur et beatae esse provident tempore, dicta, amet repellendus ea architecto laudantium perferendis labore deserunt id minima quae impedit vero quos praesentium! Aliquam, eveniet ab voluptate voluptatum quasi perferendis illo amet, explicabo, reprehenderit dicta cumque impedit repellat nam aspernatur asperiores soluta doloremque",
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

describe("<MoviesList />", () => {
  it("Component should render movies list", async () => {
    const { findByRole } = render(
      <MoviesProvider value={{ movies }}>
        <MoviesList />
      </MoviesProvider>
    );

    // screen.debug();
    const ul = await findByRole("list");
    expect(ul).toBeInTheDocument();
  });
});
