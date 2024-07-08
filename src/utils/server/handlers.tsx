import { rest } from 'msw'
import { REACT_APP_API_URL } from '../../constants'

const handlers = [
    rest.post(`${REACT_APP_API_URL}books/`, (_, res, ctx) => res(ctx.json({
        books: [
            {
                id: 2086,
                book_author: [
                    'Ανώνυμος'
                ],
                book_title: 'Ο Αλέξανδρος ο Μακεδών',
                book_publication_year: 1529,
                book_publication_country: 'Ιταλία',
                book_publication_city: 'Βενετία',
                book_pages: 104
            },
        ],
        count: 2425
    }))),
]

export default handlers
