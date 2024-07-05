import { FC, useEffect, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { BookObj } from '../../store/actions/crud/interface'
import { useGetBooksMutation } from '../../store/actions'
import schema from './data'
import s from './BookList.module.scss'

const BookList: FC = () => {
    const { title, subTitle } = schema || {}

    const [getBooks, { data, isLoading, 
        // error 
    }] = useGetBooksMutation()

    const callBooks = useCallback(() => getBooks(), [])

    useEffect(() => {
        callBooks()
    },[callBooks])

    if (isLoading || !data) return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <p className='h2 text-primary'>LOADING . . . </p>
                </div>
            </div>
        </div>
    )

    const finalData = data?.books || []

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <p className={`h1 ${s.pointer} text-primary mb-3`}>{title}</p>
                    <p className={`h5 text-muted`}>{subTitle}</p>
                </div>
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
