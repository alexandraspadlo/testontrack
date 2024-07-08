import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testutils'
import BookList from './BookList'

test('renders test and loading', async () => {
  renderWithProviders(<BookList />)
  expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
  expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
})
