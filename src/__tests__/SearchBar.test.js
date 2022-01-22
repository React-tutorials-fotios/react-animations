import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "../components/SearchBar";
import { MoviesContext } from "../App";
import MoviesProvider from "../utils/MoviesProvider";
import MoviesList from "../components/MoviesList";
import api_key from "../api_key";
import fetchMovies from "../utils/fetchMovies";

describe("<SearchBar />", () => {
  const empty = [];
  const movies = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const setMovies = jest.fn();

  it("elements are rendered ", () => {
    const { getByText, getByRole, getByTestId, getByPlaceholderText } = render(
      <MoviesProvider value={{}}>
        <SearchBar />
      </MoviesProvider>
    );

    const btn = getByRole("button", { name: /ok/i });
    fireEvent.click(btn);

    const input = getByPlaceholderText(/movie title/i);
    // First type, then see the button
    fireEvent.change(input, { target: { value: "hello" } });

    const button = getByText("Search");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("user can type in the input ", () => {
    const { getByText, getByRole, getByPlaceholderText } = render(
      <MoviesProvider value={{ empty }}>
        <SearchBar />
      </MoviesProvider>
    );

    const btn = getByRole("button", { name: /ok/i });
    fireEvent.click(btn);

    const input = getByPlaceholderText(/movie title/i);
    fireEvent.change(input, { target: { value: "hello" } });

    expect(input.value).toBe("hello");
  });
});
