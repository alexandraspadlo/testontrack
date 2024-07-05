import products from './books'
import type { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'

export * from './books'

const finalDef = {
    reducer: {
        products: products.reducer
    },
    middleware: (getMidDef: GetDefaultMiddleware) => getMidDef().concat(...[
        products.middleware
    ])
}

export default finalDef