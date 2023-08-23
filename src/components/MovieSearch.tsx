import React, { useState } from "react";
import axios from "axios";
import MovieResults from "./MovieResult";
import "../App.css";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

const MovieSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<{ Search: Movie[] }>(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=e457a512`
      );
      console.log(response.data.Search)
      if (response.data.Search) {
        setMovies(response.data.Search || []);
      } else {
        setError("No movies found.");
      }
    } catch (error) {
      setError("An error occurred while fetching movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Movie Search</h1>
      <div className="search-container d-flex justify-content-center p-4">
        <input
          type="text"
          placeholder="Enter a movie title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="form-control w-100"
        />
        <button
          className="btn btn-primary ml-2"
          onClick={handleSearch}
          disabled={loading}
        >
          Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <MovieResults movies={movies} loading={loading} />
    </div>
  );
};

export default MovieSearch;
