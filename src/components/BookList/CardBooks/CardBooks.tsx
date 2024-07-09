import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { BookObj } from '../../../store/actions/crud/interface'
import type { BookProps } from './interface'

const CardBooks: FC<BookProps> = ({ books }) => {
    if(!books?.length) return (
        <div className='row'>
            <div className='col-12 mt-4'>
                <p className='h5 text-primary'>No books available!</p>
            </div>
        </div>
    )
    return (
        <div className='row'>
            {books?.map?.((cv: BookObj) => (
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
    )
}

export default CardBooks
