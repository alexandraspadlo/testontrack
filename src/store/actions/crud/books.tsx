import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../../../constants/client'

type ReturnValueHere = any // Assing the value from products that will receive
type ArgumentTypeHere = void // assing the values from arguments... if none return void.


const products = createApi({
    baseQuery,
    reducerPath: 'books',
    endpoints: (builder) => ({
        getProds: builder.query<ReturnValueHere, ArgumentTypeHere>({
            query: () => `books/`
        }),
    })
})

export const { useGetProdsQuery } = products
export default products