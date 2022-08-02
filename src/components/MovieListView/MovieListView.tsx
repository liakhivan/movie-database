import React from 'react';
import IMovie from '../../Types/Movie.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import './MovieListView.css';

interface MovieListProps {
  listName: string;
  movieList: IMovie[];
}

function MovieListView({ listName, movieList }: MovieListProps) {
  return (
    <>
      <h3 className="movie-list-name">{listName}</h3>
      <div className="movie-container">
        {movieList.map((movie) => {
          return (
            <div className="movie-item">
              <img
                className="movie-image"
                src={movie.image}
                alt={movie.fullTitle}
              />
              <div className="rating">
                <p className="rating-value">{movie.imDbRating}</p>
              </div>
              <p className="movie-title">{movie.fullTitle}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieListView;
