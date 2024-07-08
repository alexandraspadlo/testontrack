import { FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { BookObj } from '../../store/actions/crud/interface'
import LoadingPage from '../Generics/LoadingPage'
import Header from './Header'
import { useGetBooksMutation } from '../../store/actions'

const BookList: FC = () => {
    const [page, setPage] = useState(1)

    const [getBooks, { data, isLoading,
        // error 
    }] = useGetBooksMutation()

    useEffect(() => {
        getBooks({ page })
    }, [page])

    if (isLoading || !data) return <LoadingPage />

    const finalData = data?.books || []
    const maxBooks = data?.count || 0
    const maxPage = Math.ceil(maxBooks / 20)

    const handlePage = (param?: boolean) => {
        if (param ? page >= maxPage : page <= 1) return null
        return setPage(param ? page + 1 : page - 1)
    }

    return (
        <div className="container py-5">
            <Header handlePage={handlePage} maxPage={maxPage} page={page} />
            <div className='row'>
                {finalData?.map((cv: BookObj) => (
                    <div key={uuidv4()} className="col-12 col-lg-4 mt-4">
                        <section className="w-100 h-100 bg-light p-3 rounded">
                            <p className="h5 text-primary mb-0">Title: <strong>{cv?.book_title || 'Unknown'}</strong></p>
                            <p className="mb-2">Author: <strong>{cv?.book_author || 'Unknown'}</strong></p>
                            <p className="mb-0">Year: <strong>{cv?.book_publication_year || 'N/A'}</strong></p>
                            <p className="mb-0">Pages: <strong>{cv?.book_pages || 'N/A'}</strong></p>
                            <p className="mb-0">Publication address: <strong>{[cv?.book_publication_city, cv?.book_publication_country].filter(obj => obj).join(', ') || 'N/A'}</strong></p>
                        </section>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default BookList
