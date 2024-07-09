import { FC, useEffect, useState } from 'react'
import LoadingPage from '../Generics/LoadingPage'
import CardBooks from './CardBooks'
import Header from './Header'
import { useGetBooksMutation } from '../../store/actions'

const BookList: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [filter, setFilter] = useState<string | undefined>()

    const [getBooks, { data, isLoading,
        // error 
    }] = useGetBooksMutation()

    const handlePost = () => getBooks({
        page,
        ...(filter ? {
            filters: [{
                type: 'all',
                values: [filter]
            }]
        } : {}),
    })

    useEffect(() => {
        handlePost()
    }, [page])

    // missing error page
    if (isLoading || !data) return <LoadingPage />
    const maxPage = Math.ceil(data?.count / 20)
    const handlePage = (param?: boolean) => {
        if (param ? page >= maxPage : page <= 1) return null
        return setPage(param ? page + 1 : page - 1)
    }

    return (
        <div className="container py-5">
            <Header handlePage={handlePage} maxPage={maxPage} page={page} setPage={setPage} handlePost={handlePost} filter={filter} setFilter={setFilter} />
            <CardBooks books={data?.books} />
        </div>
    )
}

export default BookList
