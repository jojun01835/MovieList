import React, { useState } from "react";
import Movie from "../components/Movie";
import MovieForm from "../components/MovieForm";
const Movies = () => {
  const [movies, setMoives] = useState([
    /* {
          title: "밀수",
          year: "2023",
        },
        {
          title: "바비",
          year: "2023",
        },
        {
          title: "인어공주",
          year: "2023",
        }, */
  ]);
  const removeMovie = (id) => {
    setMoives(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };
  const randerMovies = movies.length ? (
    movies.map((movie, i) => {
      return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
    })
  ) : (
    <div className="lefttext">영화가 없습니다.</div>
  );

  const addMovie = (movie) => {
    setMoives([...movies, movie]);
  };

  return (
    <div className="movieswrap">
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {randerMovies}
    </div>
  );
};

export default Movies;
