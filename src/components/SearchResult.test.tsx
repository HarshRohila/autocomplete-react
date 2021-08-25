import React from 'react'
import { render, screen } from '@testing-library/react'
import { SearchResult } from './SearchResult'

const movies = Array.from({ length: 10 }).map((i, idx) => {
  return { Title: 'test', imdbID: idx }
})

it('shows loading if status is pending', () => {
  //@ts-ignore
  render(<SearchResult status="pending" movies={movies} />)
  const loading = screen.getByText('Loading...')
  expect(loading.textContent).toBe('Loading...')
})

it('shows not found if movies is null', () => {
  //@ts-ignore
  render(<SearchResult status="success" movies={null} />)
  const loading = screen.getByText('Not Found!')
  expect(loading.textContent).toBe('Not Found!')
})

it('shows max 5 movies', () => {
  //@ts-ignore
  render(<SearchResult status="success" movies={movies} />)
  const searchResults = screen.getByTestId('search-results')
  expect(searchResults.querySelectorAll('li').length).toBe(5)
})
