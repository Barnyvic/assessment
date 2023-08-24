import React, { useState } from "react";
import axios from "axios";
import MovieResults from "./MovieResult";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const handleSearch = async () => {
    if (!searchQuery) {
      toast.error("Please enter a movie title.", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return; 
    }
    setLoading(true);

    try {
      const response = await axios.get<{ Search: Movie[] }>(
        `https://www.omdbapi.com/?s=${searchQuery}&apikey=e457a512`
      );
      if (response.data.Search && response.status === 200) {
        setMovies(response.data.Search || []);
        toast.success("Movies retrieved successfully ", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        toast.error("No movies found.", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (error) {
       toast.error("An error occurred while fetching movies.", {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <ToastContainer />
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
      <MovieResults movies={movies} loading={loading} />
    </div>
  );
};

export default MovieSearch;
