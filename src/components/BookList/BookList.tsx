import { FC, useEffect, useState } from 'react'
import LoadingPage from '../Generics/LoadingPage'
import CardBooks from './CardBooks'
import Header from './Header'
import { useGetBooksMutation } from '../../store/actions'
import { getURLParameters, validPageNumber, changeUrl } from '../../utils'

const BookList: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [filter, setFilter] = useState<string | undefined>()

    const [getBooks, { data, isLoading,
        // error 
    }] = useGetBooksMutation()

    useEffect(() => {
        const { page } = getURLParameters()
        if (validPageNumber(Number(page))) setPage(Number(page))
    }, [])

    const handlePost = () => {
        // avoid to make a heavy query on DB in case doesn't have filters
        const finalFilters = filter ? { filters: [{ type: 'all', values: [filter] }] } : {}
        return getBooks({
            page,
            ...finalFilters,
        })
    }

    useEffect(() => {
        changeUrl(`/?page=${page}`)
        handlePost()
    }, [page])

    // missing error page
    if (isLoading || !data) return <LoadingPage />

    const maxPage = Math.ceil(data?.count / 20)

    const handlePage = (isIncrement?: boolean) => {
        if (isIncrement ? page >= maxPage : page <= 1) return null
        return setPage(isIncrement ? page + 1 : page - 1)
    }

    return (
        <div className="container py-5">
            <Header
                handlePage={handlePage}
                maxPage={maxPage}
                page={page}
                setPage={setPage}
                handlePost={handlePost}
                filter={filter}
                setFilter={setFilter}
            />
            <CardBooks books={data?.books} />
        </div>
    )
}

export default BookList
