import { FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { BookObj } from '../../store/actions/crud/interface'
import LoadingPage from '../Generics/LoadingPage'
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

    if (isLoading || !data) return <LoadingPage />

    const maxPage = Math.ceil(data?.count / 20)

    const handlePage = (param?: boolean) => {
        if (param ? page >= maxPage : page <= 1) return null
        return setPage(param ? page + 1 : page - 1)
    }

    return (
        <div className="container py-5">
            <Header handlePage={handlePage} maxPage={maxPage} page={page} setPage={setPage} handlePost={handlePost} filter={filter} setFilter={setFilter} />
            <div className='row'>
                {data?.books?.map?.((cv: BookObj) => (
                    <div key={uuidv4()} className="col-12 col-lg-4 mt-4">
                        <section className="w-100 h-100 bg-light p-3 rounded">
                            <p className="h5 text-primary mb-0">Title: <strong>{cv?.book_title}</strong></p>
                            <p className="mb-2">Author: <strong>{cv?.book_author}</strong></p>
                            <p className="mb-0">Year: <strong>{cv?.book_publication_year}</strong></p>
                            <p className="mb-0">Pages: <strong>{cv?.book_pages}</strong></p>
                            <p className="mb-0">Publication address: <strong>{[cv?.book_publication_city, cv?.book_publication_country].filter(obj => obj).join(', ')}</strong></p>
                        </section>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default BookList
