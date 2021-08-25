import React, { useCallback } from 'react'
import useAsync from '../hooks/useAsync'
import moviesService, { MovieDetails } from '../services/movies'

type MovieProps = {
  movie: Movie
}

export const MovieCard = ({ movie }: MovieProps) => {
  const getMovieById = useCallback(() => moviesService.getById(movie.imdbID), [movie])

  const { value: movieDetails, status } = useAsync<MovieDetails>(getMovieById)

  return (
    <div className="card">
      <img src={movie.Poster} alt="Avatar" style={{ width: 100 }} />
      <div className="container">
        <h4>
          <b>{movie.Title}</b>
        </h4>
        {status === 'pending' && <p>Loading...</p>}
        {status === 'success' && <p>{movieDetails?.Ratings?.[0]?.Value}</p>}
      </div>
    </div>
  )
}

export interface Movie {
  Title: string
  imdbID: string
  Poster: string
  Year: string
}
