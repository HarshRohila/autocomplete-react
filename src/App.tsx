import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import useAsync from './hooks/useAsync'
import { debounce } from './utils/debounce'
import moviesService from './services/movies'
import { Movie, MovieCard } from './components/MovieCard'
import { SearchResult } from './components/SearchResult'

const MIN_QUERY_LENGTH = 3

function App() {
  const [query, setQuery] = useState('')
  const [isSearchFocussed, setIsSearchFocussed] = useState(false)

  const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(undefined)

  let { execute, value, status } = useAsync<Movie[]>(moviesService.searchByTitle, false)

  const getMoviesByQuery = useMemo(() => debounce(execute, 300), [execute])

  useEffect(() => {
    if (query.length >= MIN_QUERY_LENGTH) {
      getMoviesByQuery(query)
    }
  }, [query, getMoviesByQuery])

  const handleClickOnMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setQuery(movie.Title)
  }

  return (
    <div className="App">
      <h1>Search for Movies</h1>
      <div className="search-container">
        <input
          type="search"
          data-testid="search-input"
          value={query}
          placeholder="Movie Title"
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsSearchFocussed(true)}
          onBlur={() => setTimeout(() => setIsSearchFocussed(false), 100)}
        ></input>
        {isSearchFocussed && query.length >= MIN_QUERY_LENGTH && (
          <SearchResult onClickMovie={handleClickOnMovie} movies={value} status={status} />
        )}
      </div>
      {selectedMovie && (
        <div className="movie-container">
          <MovieCard movie={selectedMovie} />
        </div>
      )}
    </div>
  )
}

export default App
