import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import schema from './data'
import s from './BookList.module.scss'

const BookList: FC = () => {
    const { title, subTitle, fakeData } = schema || {}
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 text-center">
                    <p className={`h1 ${s.pointer} text-primary mb-3`}>{title}</p>
                    <p className={`h5 text-muted`}>{subTitle}</p>
                </div>
                {fakeData?.map((fD) => (
                    <div key={uuidv4()} className="col-12 col-lg-4 mt-4">
                        <section className="w-100 bg-light p-3 rounded">
                            <p className="h5 text-primary mb-0">Title: <strong>{fD?.book_title || 'Unknown'}</strong></p>
                            <p className="mb-2">Author: <strong>{fD?.book_author || 'Unknown'}</strong></p>
                            <p className="mb-0">Year: <strong>{fD?.book_publication_year || 'N/A'}</strong></p>
                            <p className="mb-0">Pages: <strong>{fD?.book_pages || 'N/A'}</strong></p>
                            <p className="mb-0">Publication address: <strong>{[fD?.book_publication_city, fD?.book_publication_country].filter(obj => obj).join(', ') || 'N/A'}</strong></p>
                        </section>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default BookList
