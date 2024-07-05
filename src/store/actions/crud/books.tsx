import { createApi } from '@reduxjs/toolkit/query/react'
import baseQuery from '../../../constants/client'
import type { ReturnValueHere, ArgumentTypeHere } from './interface'

const books = createApi({
    baseQuery,
    reducerPath: 'books',
    endpoints: (builder) => ({
        getBooks: builder.mutation<ReturnValueHere, ArgumentTypeHere>({
            query: (param) => {
                return {
                    url: 'books/',
                    method: 'POST',
                    body: param
                }
            }
        }),
    })
})

export const { useGetBooksMutation } = books
export default books