import { screen } from '@testing-library/react'
import { renderWithProviders } from '../utils/testutils'
import App from './App'

test('renders learn react link', async () => {
  renderWithProviders(<App />)
  expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
  expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
})
