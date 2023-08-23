import React from "react";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

interface MovieResultsProps {
  movies: Movie[];
  loading: boolean;
}

const MovieResults: React.FC<MovieResultsProps> = ({ movies,loading }) => {



  return (
    <div className="movie-results container">
      <div className="row">
        {loading ? (
          <div className="col-md-4 mb-4">
            <p>Loading...</p>
          </div>
        ) : (
          movies.map((movie) => (
            <div key={movie.imdbID} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={movie.Poster}
                  alt={`${movie.Title} poster`}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">Year: {movie.Year}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieResults;
