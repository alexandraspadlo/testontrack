import { screen, fireEvent } from '@testing-library/react'
import { renderWithProviders } from '../../utils/testutils'
import BookList from './BookList'

describe('test book list comp', () => {
  test('renders test and loading', async () => {
    renderWithProviders(<BookList />)
    expect(screen.getByText(/LOADING . . ./i)).toBeInTheDocument()
    expect(await screen.findByText(/Book list/i)).toBeInTheDocument()
  })
  test('text next and previous page', async () => {
    renderWithProviders(<BookList />)
    const eleme = await screen.findByText('Page:')
    expect(eleme.textContent).toBe('Page: 1')
    fireEvent.click(screen.getByText(/Next/))
    const elemChange = await screen.findByText('Page:')
    expect(elemChange.textContent).toBe('Page: 2')
    fireEvent.click(screen.getByText(/Previous/))
    const prevPage = await screen.findByText('Page:')
    expect(prevPage.textContent).toBe('Page: 1')
  })
  test('should not change the page if button disabled', async () => {
    renderWithProviders(<BookList />)
    const eleme = await screen.findByText('Page:')
    expect(eleme.textContent).toBe('Page: 1')
    fireEvent.click(screen.getByText(/Previous/))
    const prevPage = await screen.findByText('Page:')
    expect(prevPage.textContent).toBe('Page: 1')
  })
})
