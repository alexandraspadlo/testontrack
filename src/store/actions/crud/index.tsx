import books from './books'
import type { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export * from './books'

const finalDef = {
    reducer: {
        books: books.reducer
    },
    middleware: (getMidDef: GetDefaultMiddleware) => getMidDef().concat(...[
        books.middleware
    ])
}

export default finalDef