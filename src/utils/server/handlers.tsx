import { rest } from 'msw'

const handlers = [
    rest.post(`*/books/`, (_, res, ctx) => res(ctx.json({
        books: [
            {
                id: 2086,
                book_author: [
                    'My fake author'
                ],
                book_title: 'My book title',
                book_publication_year: 1529,
                book_publication_country: 'United Kingdom',
                book_publication_city: 'London',
                book_pages: 104
            },
        ],
        count: 2425
    }))),
]

export default handlers
