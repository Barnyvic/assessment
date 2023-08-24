// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import axios from "axios";
// import MovieSearch from "../components/MovieSearch";

// jest.mock("axios");

// describe("MovieSearch", () => {
//   test("renders movie search and handles search correctly", async () => {
//     // Mock axios response data
//     const mockResponse = {
//       data: {
//         Search: [
//           {
//             Title: "Movie 1",
//             Year: "2023",
//             Poster: "poster_url",
//             imdbID: "12345",
//           },
//         ],
//       },
//     };

//     (axios.get as jest.Mock).mockResolvedValue(mockResponse);

//     render(<MovieSearch />);

//     const inputElement = screen.getByPlaceholderText("Enter a movie title...");
//     const searchButton = screen.getByText("Search");

//     fireEvent.change(inputElement, { target: { value: "Example Movie" } });
//     fireEvent.click(searchButton);

//     await screen.findByText("Movie 1");

//     expect(screen.getByText("Movie 1")).toBeInTheDocument();
//   });
// });
