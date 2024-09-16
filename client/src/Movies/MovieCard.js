import React from 'react';
import addToSavedList from "../App"

const MovieCard = props => {
  // console.log(props)
  return (

    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{props.title}</h2>
        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {props.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      {props.button}
    </div>

  );
};

export default MovieCard;
