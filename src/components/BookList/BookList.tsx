import { FC, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import LoadingPage from '../Generics/LoadingPage'
import ErrorPage from '../Generics/ErrorPage'
import CardBooks from './CardBooks'
import Header from './Header'
import { useGetBooksMutation } from '../../store/actions'
import { getURLParameters, validPageNumber, changeUrl } from '../../utils'

const BookList: FC = () => {
    const [page, setPage] = useState<number>(1)
    const [filter, setFilter] = useState<string | undefined>()
    const [itemsPerPage, setItems] = useState<number>(20)

    const [getBooks, { data, isLoading, error }] = useGetBooksMutation()

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
            itemsPerPage
        })
    }

    useEffect(() => {
        changeUrl(`/?page=${page}`)
        handlePost()
    }, [page, itemsPerPage])

    if (error) return <ErrorPage err={JSON.stringify(error)} />
    if (isLoading || !data) return <LoadingPage />

    const maxPage = Math.ceil(data?.count / itemsPerPage)

    const handlePage = (isIncrement?: boolean) => {
        if (isIncrement ? page >= maxPage : page <= 1) return null
        return setPage(isIncrement ? page + 1 : page - 1)
    }

    return (
        <Container className="py-5">
            <Header
                handlePage={handlePage}
                maxPage={maxPage}
                page={page}
                setPage={setPage}
                handlePost={handlePost}
                filter={filter}
                setFilter={setFilter}
                itemsPerPage={itemsPerPage}
                setItems={setItems}
            />
            <CardBooks books={data?.books} />
        </Container>
    )
}

export default BookList
