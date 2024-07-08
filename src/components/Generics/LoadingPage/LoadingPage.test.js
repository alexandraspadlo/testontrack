import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/testutils'
import LoadingPage from './LoadingPage'

test('renders loading', () => {
  renderWithProviders(<LoadingPage />)
  expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
})
