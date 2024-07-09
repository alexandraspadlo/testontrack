import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../../utils/testutils'
import CardBooks from './CardBooks'


describe('test CardBooks component', () => {
    test('should render No books available when no props', () => {
        renderWithProviders(<CardBooks />)
        expect(screen.getByText('No books available!')).toBeInTheDocument()
    })
    test('renders CardBooks with if has props', () => {
        renderWithProviders(<CardBooks books={[
            {
                book_title: 'Title nr 1',
                book_author: 'Author fake',
                book_publication_year: 2020,
                book_pages: 3,
                book_publication_city: 'London',
                book_publication_country: 'UK'
            }
        ]} />)
        expect(screen.getByText('Title nr 1')).toBeInTheDocument()
    })
})
