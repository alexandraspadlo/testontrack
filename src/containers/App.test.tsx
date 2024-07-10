import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testutils'
import App from './App'

test('renders loading and book list page', async () => {
  renderWithProviders(<App />)
  expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
  expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
})
