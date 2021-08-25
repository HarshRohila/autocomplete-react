import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Movie, MovieCard } from './MovieCard'
import moviesService from '../services/movies'
import { act } from 'react-dom/test-utils'

const movie: Movie = {
  Poster: 'https://image.com/poster',
  Title: 'title',
  imdbID: '1',
  Year: '2020',
}

it('renders movie card with Poster, Title', () => {
  render(<MovieCard movie={movie} />)
  const movieCard = screen.getByTestId('movie-card')

  const posterImgSrc = movieCard.querySelector('img')?.src
  expect(posterImgSrc).toBe(movie.Poster)

  const title = movieCard.querySelector('h4')?.textContent
  expect(title).toBe(movie.Title)
})

it('gets movie details to render ratings', async () => {
  const expectedRating = '10/10'
  moviesService.getById = jest.fn().mockResolvedValue({
    Ratings: [{ Value: expectedRating }],
  })

  act(() => {
    render(<MovieCard movie={movie} />)
  })
  const movieCard = screen.getByTestId('movie-card')

  const ratings = movieCard.querySelector('p')?.textContent
  expect(ratings).toBe('Loading...')

  await waitFor(() => {
    return screen.getByTestId('ratings')
  })

  expect(screen.getByTestId('ratings').textContent).toBe(expectedRating)
})
