import React from 'react'
import { Movie } from './Movie'

type SearchResultProps = {
  status: 'pending' | 'success' | 'idle' | 'error'
  onClickMovie: (movie: Movie) => void
  movies: Movie[] | null
}

export const SearchResult = ({ onClickMovie, movies, status }: SearchResultProps) => {
  return (
    <>
      {status === 'pending' && <h1>Loading...</h1>}
      {status === 'success' && (
        <>
          {movies && (
            <ul className="search-results" tabIndex={-1}>
              {movies.slice(0, 5).map((movie) => (
                <li onClick={() => onClickMovie(movie)} key={movie.imdbID}>
                  {movie.Title}
                </li>
              ))}
            </ul>
          )}
          {!movies && <h1>Not Found!</h1>}
        </>
      )}
    </>
  )
}
