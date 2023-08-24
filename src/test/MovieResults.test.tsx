import React from "react";
import { render } from "@testing-library/react";
import MovieResults from "../components/MovieResult";

describe("MovieResults Component", () => {
  const movies = [
    {
      Title: "Movie 1",
      Year: "2021",
      Poster: "movie1.jpg",
      imdbID: "tt1234561",
    },
    {
      Title: "Movie 2",
      Year: "2022",
      Poster: "movie2.jpg",
      imdbID: "tt1234562",
    },
  ];

  it("should render movie cards", () => {
    const { getByText, getByAltText } = render(
      <MovieResults movies={movies} loading={false} />
    );

    movies.forEach((movie) => {
      const titleElement = getByText(movie.Title);
      expect(titleElement).toBeInTheDocument();

      const yearElement = getByText(`Year: ${movie.Year}`);
      expect(yearElement).toBeInTheDocument();

      const imageElement = getByAltText(`${movie.Title} poster`);
      expect(imageElement).toBeInTheDocument();
      expect(imageElement).toHaveAttribute("src", movie.Poster);
    });
  });

  it("should show loading message", () => {
    const { getByText } = render(<MovieResults movies={[]} loading={true} />);
    const loadingElement = getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });
});
