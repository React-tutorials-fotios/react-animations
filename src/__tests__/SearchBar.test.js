import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "../components/SearchBar";
import { MoviesProvider } from "../utils/MoviesProvider";

describe("<SearchBar />", () => {
  it("elements are rendered", () => {
    render(
      <MoviesProvider value={{}}>
        <SearchBar />
      </MoviesProvider>
    );

    const btn = screen.getByRole("button", { name: /ok/i });
    fireEvent.click(btn);

    const input = screen.getByPlaceholderText(/movie title/i);
    // First type, then see the button
    fireEvent.change(input, { target: { value: "hello" } });

    const button = screen.getByText("Search");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("user can type in the input", () => {
    render(
      <MoviesProvider value={{}}>
        <SearchBar />
      </MoviesProvider>
    );

    const btn = screen.getByRole("button", { name: /ok/i });
    fireEvent.click(btn);

    const input = screen.getByPlaceholderText(/movie title/i);
    fireEvent.change(input, { target: { value: "hello" } });

    expect(input.value).toBe("hello");
  });
});
