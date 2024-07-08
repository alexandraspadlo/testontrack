import { rest } from 'msw'
import { REACT_APP_API_URL } from '../../constants'

const handlers = [
	rest.get(`${REACT_APP_API_URL}books/`, (_, res, ctx) => res(ctx.json({
        count: 333,
        next: 'page=3',
        prev: 'page=1',
        results: [
            { id: 'dsafasd', name: 'sadfasdfsadf' }
        ]
    }))),
]

export default handlers
