import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

it('shows input search bar', () => {
  render(<App />)
  const searchInput = screen.getByTestId('search-input')
  expect(searchInput).toBeInTheDocument()
})
