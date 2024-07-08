import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/testutils'
import Header from './Header'

test('renders header', async () => {
  renderWithProviders(<Header />)
  expect(screen.getByText(/Here are a books available - check the list below/i)).toBeInTheDocument()
  expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
})
