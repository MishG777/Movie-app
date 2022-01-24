import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  poster_path,
  title,
  overview,
  vote_average,
  release_date,
}) => {
  return (
    <div className="movie">
      <div className="movie-header">
        <img src={IMG_API + poster_path} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          <span>{vote_average}</span>

          <div className="movie-over">
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
          <p>released: {release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
