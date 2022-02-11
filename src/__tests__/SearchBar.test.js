import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { SearchBar } from "../components";
import { MoviesProvider } from "../utils";

describe("<SearchBar />", () => {
  it("Input and button elements are rendered", () => {
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

  it("User can see what is typed in the input", () => {
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
