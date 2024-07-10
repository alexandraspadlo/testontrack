import { render, screen } from '@testing-library/react'
import CardBooks from './CardBooks'


describe('test CardBooks component', () => {
    test('should render No books available when no props', () => {
        render(<CardBooks />)
        expect(screen.getByText('No books available!')).toBeInTheDocument()
    })
    test('renders CardBooks with if has props', () => {
        render(<CardBooks books={[
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
