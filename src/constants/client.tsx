import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REACT_APP_API_URL } from './'
// import { getToken } from '../utils'

const baseQuery = fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
    // prepareHeaders: (headers) => {
    //     const token = getToken()
    //     if (token) headers.set('Authorization', `Bearer ${token}`)
    //     return headers
    // },
})

export default baseQuery