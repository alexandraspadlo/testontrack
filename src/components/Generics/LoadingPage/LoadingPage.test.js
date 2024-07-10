import { render, screen } from '@testing-library/react'
import LoadingPage from './LoadingPage'

test('renders loading', () => {
  render(<LoadingPage />)
  expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
})
