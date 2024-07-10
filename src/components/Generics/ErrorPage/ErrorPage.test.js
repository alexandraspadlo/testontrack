import { render, screen } from '@testing-library/react'
import ErrorPage from './ErrorPage'

test('render error title', () => {
  render(<ErrorPage />)
  const linkElement = screen.getByText(/Something went wrong!!/i)
  expect(linkElement).toBeInTheDocument()
})
