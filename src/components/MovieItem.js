import React from "react";
import { NavLink } from "react-router-dom";
import '../index.css';

function MovieItem({ movie }) {
  if (!Array.isArray(movie)) {
    return null;
  }

  return (
    <div className="loading">
      <ol className="movie-list">
        {movie.map((movieItem) => (
          <li key={movieItem.id}>
            <NavLink to={`/movies/${movieItem.id}`} activeclassname="active">
              {movieItem.title}
            </NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default MovieItem;
