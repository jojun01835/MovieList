import React from "react";

const Movie = (props) => {
  return (
    <div className="movie" key={props.id}>
      <div className="movie-title">
        {props.movie.title}
        <span className="movie-year">{props.movie.year}</span>
      </div>
      <button
        onClick={() => {
          props.removeMovie(props.movie.id);
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default Movie;
